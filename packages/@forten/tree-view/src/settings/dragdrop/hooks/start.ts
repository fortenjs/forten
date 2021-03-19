import { reference, resolve } from '@forten/build'
import { DragdropHooks } from '@forten/dragdrop'
import { cutBranch, newTree } from '@forten/tree'
import { Context } from '../../../app.js'
import { defaultUILayout } from '../../../helpers/uilayout.js'
import { LibraryDrag, TreeDrag } from '../../../types/index.js'

export const start: DragdropHooks['start'] = (ctx: Context) => {
  const { state } = ctx
  const { drag } = state.dragdrop
  if (!drag) {
    return
  }
  if (drag.payload.block) {
    const lib: LibraryDrag = drag.payload

    const def = ctx.state.tree.definitions()[lib.treeType]
    if (!def) {
      throw new Error(
        `Cannot drag new node to tree type '${lib.treeType}' (missing definition).`
      )
    }
    const tree = newTree(lib.treeType, def.newBlock(ctx, lib.block))

    ctx.state.treeView.dragTree = tree
    const newPayload: TreeDrag = {
      origin: reference(ctx.state.treeView.dragTree),
      tree,
      blockId: tree.entry,
    }
    drag.payload = newPayload
  }

  const payload = drag.payload as TreeDrag
  const origin = resolve(ctx, payload.origin)
  if (!origin) {
    return
  }
  // Fix anchor to below up slot
  drag.anchor = {
    // We grab on the open/close arrow to avoid hidding the name.
    // 4 = adjust to have grab cursor right on open/close arrow.
    x: defaultUILayout.RADIUS + defaultUILayout.ARROW / 2 + 4,
    y: defaultUILayout.SLOT + defaultUILayout.HEIGHT / 2,
  }
  // Create a sub-tree
  const { trunc, cut, slotIdx, parentId } = cutBranch(origin, payload.blockId)
  if (!cut) {
    throw new Error(
      `Invalid operation, cannot cut tree at blockId '${payload.blockId}'.`
    )
  }
  // Change original graph in place.
  const uigraph = ctx.state.treeView.uimap[origin.id]
  delete origin.lock
  delete origin.selected

  Object.assign(origin, trunc)
  if (parentId && slotIdx !== undefined) {
    const uinode = uigraph.uiNodeById[payload.blockId]
    if (uinode) {
      origin.lock = { parentId, slotIdx, width: uinode.size.w }
    }
  }

  // Change grabbed part
  payload.tree = cut
  // We pass 'payload.tree' because uimap expects the proxy value.
  ctx.actions.treeView.uimap({ tree: payload.tree })
  ctx.actions.treeView.uimap({ tree: origin })
}

import { reference, resolve, unproxy } from '@forten/build'
import { DragdropHooks } from '@forten/dragdrop'
import { cutBranch, newTree } from '@forten/tree'
import { Context } from '../../../app.js'
import { LibraryDrag, TreeDrag } from '../../../types/index.js'

export const start: DragdropHooks['start'] = (ctx: Context) => {
  const { state } = ctx
  const { drag } = state.dragdrop
  if (!drag) {
    return
  }
  if (drag.payload.block) {
    const lib: LibraryDrag = drag.payload
    const tree = newTree(lib.treeType, unproxy(lib.block))
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

import { Action } from '../app'
import { sortLibrary } from '../helpers/sortLibrary.js'

export interface LibSelectArg {
  operation: 'up' | 'down' | 'editContent' | 'editName'
}

export const navigateLibrary: Action<LibSelectArg> = (ctx, arg) => {
  const { operation } = arg
  const { library: tree } = ctx.state.treeView
  if (operation === 'editContent' || operation === 'editName') {
    const id = tree.selected?.id
    if (id) {
      ctx.actions.tree.selectBlock({
        id,
        tree,
        editContent: operation === 'editContent',
        editName: operation === 'editName',
      })
    }
    return
  }
  const id = tree.selected?.id || 'any'
  const blocks = Object.values(tree.blocks).sort(sortLibrary)
  if (blocks.length === 0) {
    return
  }
  let idx = Math.max(
    0,
    blocks.findIndex(b => b.id === id)
  )
  if (operation === 'up') {
    idx = (idx + blocks.length - 1) % blocks.length
  } else if (operation === 'down') {
    idx = (idx + blocks.length + 1) % blocks.length
  }
  ctx.actions.tree.selectBlock({
    id: blocks[idx].id,
    tree,
    editName: false,
  })
}

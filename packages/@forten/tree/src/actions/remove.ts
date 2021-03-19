import { TreeType } from '@forten/tree-type'
import { Action } from '../app.js'
import { cutBranch } from '../helpers/index.js'

export interface RemoveArg {
  tree: TreeType
  blockId: string
}

export const remove: Action<RemoveArg> = (ctx, arg) => {
  const { tree, blockId } = arg
  // Create a sub-tree
  const { trunc, cut, parentId } = cutBranch(tree, blockId)
  if (!cut) {
    throw new Error(
      `Invalid operation, cannot cut tree at blockId '${blockId}'.`
    )
  }
  Object.assign(tree, trunc)
  delete tree.selected
  if (parentId) {
    tree.selected = { id: parentId, editName: false }
  }
  ctx.actions.tree.changed({ tree })
}

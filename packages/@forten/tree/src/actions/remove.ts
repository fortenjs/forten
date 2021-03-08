import { TreeType } from '@forten/tree-type'
import { Action } from '../app'
import { cutBranch } from '../helpers'

export interface RemoveArg {
  tree: TreeType
  nodeId: string
}

export const remove: Action<RemoveArg> = (ctx, arg) => {
  const { tree, nodeId } = arg
  // Create a sub-tree
  const { trunc, cut, parentId } = cutBranch(tree, nodeId)
  if (!cut) {
    throw new Error(`Invalid operation, cannot cut tree at nodeId '${nodeId}'.`)
  }
  Object.assign(tree, trunc)
  delete tree.selected
  if (parentId) {
    tree.selected = { id: parentId, editName: false }
  }
  ctx.actions.tree.changed({ tree })
}
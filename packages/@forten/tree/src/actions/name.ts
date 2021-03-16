import { TreeType } from '@forten/tree-type'
import { Action } from '../app'

export interface SetNameArg {
  name: string
  blockId: string
  tree: TreeType
  done?: boolean
}

export const setName: Action<SetNameArg> = (ctx, arg) => {
  const { done, name, blockId, tree } = arg
  if (done) {
    tree.selected = { id: blockId, editName: false }
  }
  tree.blocks[blockId].name = name
  ctx.actions.tree.changed({ tree })
}

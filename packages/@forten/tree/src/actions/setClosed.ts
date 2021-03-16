import { TreeType } from '@forten/tree-type'
import { Action } from '../app'

export interface SetClosedArg {
  blockId: string
  tree: TreeType
  closed: boolean
}

export const setClosed: Action<SetClosedArg> = (ctx, arg) => {
  const { closed, blockId, tree } = arg
  tree.blocks[blockId].closed = closed
  ctx.actions.tree.changed({ tree })
}

import { TreeType } from '@forten/tree-type'
import { Action } from '../app'

export interface SetContentArg {
  blockId: string
  tree: TreeType
  // FIXME: how to make this generic ?
  content: any
}

export const setContent: Action<SetContentArg> = (ctx, arg) => {
  const { content, blockId, tree } = arg
  const previousContent = tree.blocks[blockId].content
  tree.blocks[blockId].content = content
  ctx.actions.tree.contentChanged({ tree, blockId, previousContent })
}

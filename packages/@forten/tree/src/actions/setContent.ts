import { TreeType } from '@forten/tree-type'
import { Action } from '../app.js'

export interface SetContentArg {
  blockId: string
  tree: TreeType
  content: any
  moreEdits?: boolean
}

export const setContent: Action<SetContentArg> = (ctx, arg) => {
  const { content, blockId, tree } = arg
  const previousContent = tree.blocks[blockId].content
  tree.blocks[blockId].content = content

  const definition = ctx.state.tree.definitions()[tree.type]
  if (definition) {
    definition.contentChanged.forEach(fun =>
      fun(ctx, { ...arg, previousContent })
    )
  }
  if (!arg.moreEdits) {
    ctx.actions.tree.changed({ tree })
  }
}

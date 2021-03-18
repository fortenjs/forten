import { TreeType } from '@forten/tree-type'
import { Action } from '../app.js'

export interface SetNameArg {
  name: string
  blockId: string
  tree: TreeType
  done?: boolean
  moreEdits?: boolean
}

export const setName: Action<SetNameArg> = (ctx, arg) => {
  const { done, name, blockId, tree } = arg
  if (done) {
    tree.selected = { id: blockId, editName: false }
  }
  const previousName = tree.blocks[blockId].name
  if (name === previousName) {
    return
  }
  tree.blocks[blockId].name = name

  const definition = ctx.state.tree.definitions()[tree.type]
  if (definition) {
    definition.nameChanged.forEach(fun => fun(ctx, { ...arg, previousName }))
  }
  if (!arg.moreEdits) {
    ctx.actions.tree.changed({ tree })
  }
}

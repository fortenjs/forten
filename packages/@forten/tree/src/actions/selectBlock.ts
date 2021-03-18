import { TreeType } from '@forten/tree-type'
import { Action } from '../app.js'

export interface selectBlockArg {
  // block id
  id: string
  editName?: boolean
  editContent?: boolean
  tree: TreeType
}

export const selectBlock: Action<selectBlockArg> = (ctx, arg) => {
  const { id, editName, tree } = arg
  const { selected } = tree
  if (selected && selected.id === id && selected.editName === editName) {
    delete tree.selected
  } else {
    tree.selected = { id, editName: !!editName }
  }
  const definition = ctx.state.tree.definitions()[tree.type]
  if (definition) {
    definition.selectNode.forEach(fun => fun(ctx, arg))
  }
}

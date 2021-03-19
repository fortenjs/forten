import { TreeType } from '@forten/tree-type'
import { Action } from '../app.js'
import { makeId } from '../helpers/index.js'
import { TreeConnectArg } from '../types.js'

export interface TreeChangedArg {
  tree: TreeType
  connecting?: TreeConnectArg
}

export const changed: Action<TreeChangedArg> = (ctx, arg) => {
  const { state } = ctx
  const { tree } = arg
  if (!arg.connecting) {
    // Only re-render on true drop
    tree.version = makeId({ [tree.version]: '' })
  }

  // callback on tree change
  const definition = state.tree.definitions()[tree.type]
  if (definition) {
    definition.treeChanged.forEach(fun => fun(ctx, arg))
  }
}

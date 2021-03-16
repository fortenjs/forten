import { resolve } from '@forten/build'
import { Action } from '../app.js'
import { TreeDrag, TreeDrop } from '../types/index.js'

export type DropArg = TreeDrag & TreeDrop

export const drop: Action<DropArg> = (ctx, arg) => {
  const target = resolve(ctx, arg.target)
  if (!target) {
    return
  }

  const slotTarget = ctx.state.treeView.dropTarget[target.id]
  if (!slotTarget) {
    return
  }
  delete ctx.state.treeView.dropTarget[target.id]

  ctx.actions.tree.append(Object.assign({}, arg, slotTarget))
}

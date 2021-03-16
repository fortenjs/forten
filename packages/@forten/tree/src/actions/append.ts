import { Reference, resolve } from '@forten/build'
import { TreeType } from '@forten/tree-type'
import { Action } from '../app'
import { appendGraph, makeId } from '../helpers'

export interface AppendArg {
  // Thing to append
  // A reference to the original graph (where the drag operation started for example).
  origin: Reference<TreeType>
  // The branch to append
  tree: TreeType

  // Target
  target: Reference<TreeType>
  blockId: string
  slotIdx: number
}

export const append: Action<AppendArg> = (ctx, arg) => {
  const origin = resolve(ctx, arg.origin)
  if (origin && origin.lock) {
    delete origin.lock
    origin.version = makeId({ [origin.version]: '' })
  }

  const target = resolve(ctx, arg.target)
  if (!target) {
    return
  }
  if (origin && origin.id !== target.id) {
    // Removed lock, run change
    ctx.actions.tree.changed({ tree: origin })
  }

  const { tree, blockId, slotIdx } = arg
  appendGraph(target, blockId, slotIdx, tree)
  ctx.actions.tree.changed({ tree: target })
}

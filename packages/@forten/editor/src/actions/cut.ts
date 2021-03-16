import { Action } from '../app.js'
import { CompositionHolder } from '../lib/index.js'
import { SelectionType } from '../lib/utils/types.js'

export interface CutArg {
  holder: CompositionHolder
  selection: SelectionType
}

export const cut: Action<CutArg> = (ctx, arg) => {
  ctx.actions.editor.copy(arg)
  ctx.actions.editor.applyOp({
    holder: arg.holder,
    selection: arg.selection,
    op: 'Delete',
    opts: {},
  })
}

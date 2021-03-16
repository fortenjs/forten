import { Action } from '../app.js'
import { CompositionHolder } from '../lib/utils/types.js'

export interface ClearToolboxArgs {
  holder: CompositionHolder
}
export const clearToolbox: Action<ClearToolboxArgs> = (ctx, value) => {
  const { editor } = ctx.effects
  editor.ensureComposition(value.holder)
  editor.clearToolbox(value.holder)
}

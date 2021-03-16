import { Action } from '../app.js'
import { CompositionHolder } from '../lib/index.js'

export interface EnsureCompositionArg {
  holder: CompositionHolder
}

export const ensureComposition: Action<EnsureCompositionArg> = (
  ctx,
  { holder }
) => {
  ctx.effects.editor.ensureComposition(holder)
}

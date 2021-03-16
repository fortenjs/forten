import { Action } from '../app.js'
import { CompositionHolder, undoRedo } from '../lib/index.js'

export const undo: Action<{ holder: CompositionHolder }> = (ctx, arg) => {
  undoRedo(ctx, arg.holder, -1)
}

export const redo: Action<{ holder: CompositionHolder }> = (ctx, arg) => {
  undoRedo(ctx, arg.holder, 1)
}

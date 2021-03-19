import { Action } from '../app.js'
import { runHook } from '../helpers/index.js'

export const leave: Action = ctx => {
  const { state } = ctx
  // Leave hook is run before
  runHook('leave', ctx, {})

  delete state.dragdrop.drop
}

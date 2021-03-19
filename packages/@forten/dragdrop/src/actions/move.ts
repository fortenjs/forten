import { Action } from '../app.js'
import { runHook } from '../helpers/index.js'
import { Position } from '../types.js'

export interface MoveArg {
  position: Position
}

export const move: Action<MoveArg> = (ctx, value) => {
  const { state } = ctx
  state.dragdrop.position = value.position

  // Move hook is run after
  if (runHook('move', ctx, value)) {
    state.dragdrop.disableDrop = true
  } else if (state.dragdrop.disableDrop) {
    delete state.dragdrop.disableDrop
  }
}

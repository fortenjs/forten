import { Action } from '../app.js'
import { runHook } from '../helpers/index.js'
import { DragData, Position } from '../types.js'

export interface StartArg {
  drag: DragData
  position: Position
}

export const start: Action<StartArg> = (ctx, value) => {
  const { state } = ctx
  const transforms = state.dragdrop.definitions().dragTransform
  let { drag } = value
  const { type } = drag

  // Transform on drag start
  const transformers = transforms[type]
  if (transformers) {
    for (const transform of Object.values(transformers)) {
      const newDrag = transform(ctx, drag)
      if (newDrag) {
        drag = newDrag
        break
      }
    }
  }

  state.dragdrop.drag = drag
  state.dragdrop.position = value.position

  // Start hook is run after
  runHook('start', ctx, value)
}

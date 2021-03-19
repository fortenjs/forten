import { Action } from '../app.js'
import { runHook } from '../helpers/index.js'
import { DropData } from '../types.js'

export interface EnterArg {
  htmlElement: HTMLElement
  drop: DropData
}

export const enter: Action<EnterArg> = (ctx, value) => {
  const { state } = ctx
  const drag = state.dragdrop.drag
  if (!drag) {
    return
  }
  state.dragdrop.drop = value.drop

  // Enter hook is run after
  runHook('enter', ctx, value)
}

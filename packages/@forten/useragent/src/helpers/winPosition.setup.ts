import { Context } from '../app.js'
import { winPosition } from './winPosition.types.js'

export function setupWinPosition(ctx: Context) {
  const api = window[winPosition]
  if (!api) {
    return
  }
  api.onChange(ctx.actions.useragent.windowSizeChanged)
}

import { unproxy } from '@forten/build'
import { Action } from '../app.js'
import { WinPosition, winPosition } from '../helpers/winPosition.types.js'

export const setWinPosition: Action<WinPosition> = (ctx, arg) => {
  const api = window[winPosition]
  if (!api) {
    return
  }
  api.set(unproxy(arg))
}

export const windowSizeChanged: Action<WinPosition> = (ctx, arg) => {
  const { useragent } = ctx.state
  if (!arg.default || (arg.default && useragent.winPosition.default)) {
    useragent.winPosition = arg
  }
}

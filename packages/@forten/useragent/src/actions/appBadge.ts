import { Action } from '../app.js'
import { appBadge } from '../helpers/appBadge.types.js'

export const setBadge: Action<{ text: string }> = (ctx, arg) => {
  const api = window[appBadge]
  if (!api) {
    return
  }
  api.set(arg.text)
}

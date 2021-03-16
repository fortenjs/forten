import { Action, AsyncAction } from '../app.js'
import { appUpdate, AppUpdateInfo } from '../helpers/index.js'
import { useragent_restart } from '../types.js'

export const updateChanged: Action<AppUpdateInfo> = (ctx, arg) => {
  console.log('updateChanged', arg)
  ctx.state.useragent.hasUpdate = arg
}

export const restartToUpdate: AsyncAction = async ctx => {
  console.log('restartToUpdate')
  const api = window[appUpdate]
  const { hasUpdate } = ctx.state.useragent
  if (await ctx.actions.hooks[useragent_restart]()) {
    // Interrupted
    return
  }
  if (api && hasUpdate && hasUpdate.needsRestart) {
    api.restart()
  } else {
    document.location.reload()
  }
}

import { AsyncAction } from '../app.js'
import { prefsDb } from '../prefsDb.js'

export const selectDb: AsyncAction<{ userId: string } | void> = async (
  ctx,
  arg
) => {
  ctx.state.preferences.db = await prefsDb(
    arg ? arg.userId : undefined,
    ctx.state.preferences.defaults
  )
  await ctx.actions.preferences.restore()
}

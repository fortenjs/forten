import { AsyncAction } from '../app.js'
import { prefsDb } from '../prefsDb.js'
import { preferences_clear } from '../types.js'

export const clear: AsyncAction<{ userId: string } | void> = async (
  ctx,
  arg
) => {
  const done = await ctx.actions.hooks[preferences_clear]()
  if (!done) {
    const api = await prefsDb(arg ? arg.userId : undefined, {})
    await api.delete()
  }
}

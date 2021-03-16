import { AsyncAction } from '../app.js'
import { deepSet } from '../helper.js'
import { preferences_restore, preferences_restored } from '../types.js'

export const restore: AsyncAction = async ctx => {
  const { actions, state } = ctx
  const done = await actions.hooks[preferences_restore]()
  if (!done) {
    const values = await state.preferences.db.getValues()
    ctx.state.preferences.restoring = true
    values.forEach(({ path, value }) => {
      deepSet(state, path, value)
    })
    ctx.state.preferences.restoring = false
  }
  await actions.hooks[preferences_restored]()
}

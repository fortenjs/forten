import { HooksSettings } from '@forten/hooks'
import { PreferencesHooks, PreferencesSettings } from '@forten/preferences'
import { Context } from './app'

export const settings: PreferencesSettings & HooksSettings<PreferencesHooks> = {
  preferences: {
    paths: {
      ['useragent.winPosition']: true,
    },
  },
  hooks: {
    preferences_restored(ctx: Context) {
      ctx.actions.useragent.setWinPosition(ctx.state.useragent.winPosition)
    },
  },
}

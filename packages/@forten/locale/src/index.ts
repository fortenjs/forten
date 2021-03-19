import { Block, settings } from '@forten/build'
import { preferences, PreferencesSettings } from '@forten/preferences'
import * as actions from './actions/index.js'
import { hooksActions } from './hooksActions.js'
import { onInitialize } from './onInitialize.js'
import { setup } from './setup.js'
import { translate } from './translate.js'
import { LocaleConfig } from './types.js'

export * from './types.js'

export const locale: Block<LocaleConfig> = {
  name: 'locale',
  dependencies: [preferences],
  setup,
  onInitialize,
  settings: settings<PreferencesSettings>({
    preferences: {
      paths: {
        'locale.lang': true,
      },
    },
  }),
  actions: {
    hooks: hooksActions,
    locale: actions,
  },
  state: {
    locale: {
      lang: 'en',
      locales: {
        en: {},
        fr: {},
      },
      // This is only set in development
      sources: {},
      common: { en: 'English', de: 'Deutsche', fr: 'Français', it: 'Italiano' },
      translate,
    },
  },
}

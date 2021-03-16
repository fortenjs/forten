import { Block } from '@forten/build'
import { locale } from '@forten/locale'
import { theme } from '@forten/theme'
import * as actions from './actions/index.js'
import { FaIconComponent } from './components/index.js'
import { settings } from './settings/index.js'
import { setup } from './setup.js'
import { StyledConfig } from './types.js'

export * from './components/index.js'
export * from './theme.js'
export * from './types.js'

export const styled: Block<StyledConfig> = {
  name: 'styled',
  setup,
  dependencies: [locale, theme],
  settings,
  state: {
    styled: {
      iconProvider: () => ({
        IconComponent: FaIconComponent,
        icons: {},
      }),
      sizes: {},
      // These are dummy value replaced
      familyComponents: null as any,
      show: {},
      showTips: true,
    },
  },
  actions: {
    styled: actions,
  },
}

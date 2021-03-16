import { Block } from '@forten/build'
import { selectedTheme } from './derived.js'
import { setup } from './setup.js'
import { defaultTheme } from './themes/defaultTheme.js'
import { ThemeConfig } from './types.js'

export * from './components/index.js'
export * from './proxy.js'
export * from './themes/index.js'
export * from './types.js'

export const theme: Block<ThemeConfig> = {
  name: 'theme',
  setup,
  state: {
    theme: {
      selected: 'default',
      themes: {
        default: Object.assign({}, defaultTheme),
      },
      selectedTheme,
    },
  },
}

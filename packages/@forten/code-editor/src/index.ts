import { Block, settings } from '@forten/build'
import { locale } from '@forten/locale'
import { styled, StyledSettings } from '@forten/styled'
import { theme, ThemeSettings } from '@forten/theme'
import * as actions from './actions/index.js'
import { icons } from './icons.js'
import { codeEditorTheme } from './theme.js'
import { CodeEditorConfig } from './types.js'

export * from './components/index.js'
export * from './theme.js'
export * from './types.js'

export const codeEditor: Block<CodeEditorConfig> = {
  name: 'treeView',
  dependencies: [locale, theme, styled],
  settings: settings<ThemeSettings & StyledSettings>({
    styled: {
      icons,
    },
    theme: {
      default: codeEditorTheme,
    },
  }),
  state: {
    codeEditor: {},
  },
  actions: {
    codeEditor: actions,
  },
}

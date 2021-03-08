import { Block, settings } from '@forten/build'
import { locale } from '@forten/locale'
import { styled, StyledSettings } from '@forten/styled'
import { theme, ThemeSettings } from '@forten/theme'
import * as actions from './actions'
import { icons } from './icons'
import { codeEditorTheme } from './theme'
import { CodeEditorConfig } from './types'

export * from './components'
export * from './theme'
export * from './types'

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

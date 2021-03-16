import { LocaleSettings } from '@forten/locale'
import { ThemeSettings } from '@forten/theme'
import { icons } from '../icons.js'
import { styledTheme } from '../theme.js'
import { StyledSettings } from '../types.js'
import { locale } from './locale/index.js'

type Settings = LocaleSettings & StyledSettings & ThemeSettings

export const settings: Settings = {
  locale,
  theme: {
    default: styledTheme,
  },
  styled: {
    icons,
  },
}

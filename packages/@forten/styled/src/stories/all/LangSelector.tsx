import { LangSelector as component, LangSelectorProps } from '../../index.js'
import { config, Stories } from '../helpers.js'

export const langSelector: Stories<LangSelectorProps> = {
  name: 'LangSelector',
  component,
  config,
  stories: [
    {
      name: 'simple',
    },
    {
      name: 'single lang',
      state: {
        locale: {
          lang: 'en',
          locales: {
            en: {},
          },
        },
      },
    },
  ],
}

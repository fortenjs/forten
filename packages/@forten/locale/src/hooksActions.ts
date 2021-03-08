import { makeHook } from '@forten/hooks'
import { locale_set } from './types'

export const hooksActions = {
  [locale_set]: makeHook<{ lang: string }>(locale_set),
}

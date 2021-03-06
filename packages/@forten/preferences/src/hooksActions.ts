import { makeHook } from '@forten/hooks'
import {
  preferences_clear,
  preferences_restore,
  preferences_restored,
  preferences_save,
} from './types.js'

export const hooksActions = {
  [preferences_clear]: makeHook(preferences_clear),
  [preferences_restore]: makeHook(preferences_restore),
  [preferences_restored]: makeHook(preferences_restored),
  [preferences_save]: makeHook<{ path: string; value: any }>(preferences_save),
}

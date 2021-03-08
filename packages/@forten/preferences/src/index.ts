import { Block } from '@forten/build'
import { hooks } from '@forten/hooks'
import * as actions from './actions'
import { hooksActions } from './hooksActions'
import { onInitialize } from './onInitialize'
import { setup } from './setup'
import { PreferencesConfig } from './types'
export { deletePrefsDb, selectPrefsDb } from './prefsDb'
export * from './types'

export const preferences: Block<PreferencesConfig> = {
  name: 'preferences',
  dependencies: [hooks],
  setup,
  onInitialize,
  state: {
    preferences: {
      changed: {},
      // dummy
      paths: [],
      defaults: {},
      appName: 'lucy',
      appWebsite: '/',
    },
  },
  actions: {
    hooks: hooksActions,
    preferences: actions,
  },
}

import { Block } from '@forten/build'
import { hooks } from '@forten/hooks'
import * as actions from './actions/index.js'
import { hooksActions } from './hooksActions.js'
import { onInitialize } from './onInitialize.js'
import { dummyDb } from './prefsDb.js'
import { setup } from './setup.js'
import { PreferencesConfig } from './types.js'

export { prefsDb } from './prefsDb.js'
export * from './types.js'

export const preferences: Block<PreferencesConfig> = {
  name: 'preferences',
  dependencies: [hooks],
  setup,
  onInitialize,
  state: {
    preferences: {
      db: dummyDb,
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

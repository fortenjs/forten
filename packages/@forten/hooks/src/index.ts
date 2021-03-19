import { Block } from '@forten/build'
import { setup } from './setup.js'
import { HooksConfig } from './types.js'

export * from './helpers.js'
export * from './types.js'

export const hooks: Block<HooksConfig> = {
  name: 'hooks',
  setup,
  state: {
    hooks: {},
  },
}

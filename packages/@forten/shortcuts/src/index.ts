import { Block } from '@forten/build'
import { onInitialize } from './onInitialize.js'
import { setup } from './setup.js'
import { ShortcutsConfig } from './types.js'

export * from './command.js'
export * from './types.js'

export const shortcuts: Block<ShortcutsConfig> = {
  name: 'shortcuts',
  setup,
  state: {
    shortcuts: {
      settings: () => ({}),
      definitions: {},
    },
  },
  effects: {
    shortcuts: {
      // Dummy (set in onInitialize)
      run() {
        return false
      },
    },
  },
  onInitialize,
}

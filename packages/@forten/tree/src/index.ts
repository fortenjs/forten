import { Block } from '@forten/build'
import { hooks } from '@forten/hooks'
import * as actions from './actions/index.js'
import { setup } from './setup.js'
import { TreeConfig } from './types.js'

export * from './helpers/index.js'
export { TreeConfig, TreeDefinitions, TreeSettings } from './types.js'

export const tree: Block<TreeConfig> = {
  name: 'tree',
  dependencies: [hooks],
  setup,
  state: {
    tree: {
      // Dummy. Set with 'setup'
      definitions: () => ({}),
    },
  },
  actions: {
    tree: actions,
  },
}

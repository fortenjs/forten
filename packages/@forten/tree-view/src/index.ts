import { Block } from '@forten/build'
import { dragdrop } from '@forten/dragdrop'
import { locale } from '@forten/locale'
import { styled } from '@forten/styled'
import { theme } from '@forten/theme'
import { newTree, tree } from '@forten/tree'
import * as actions from './actions/index.js'
import { settings } from './settings/index.js'
import { TreeViewConfig } from './types/index.js'

export * from './components/index.js'
export * from './settings/theme.js'
export * from './types/index.js'

export const treeView: Block<TreeViewConfig> = {
  name: 'treeView',
  dependencies: [tree, locale, theme, dragdrop, styled],
  settings,
  state: {
    treeView: {
      // Dummy value
      library: newTree('', { name: '', content: {} }),
      dropTarget: {},
      uimap: {},
    },
  },
  actions: {
    treeView: actions,
  },
}

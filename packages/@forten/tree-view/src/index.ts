import { Block } from '@forten/build'
import { dragdrop } from '@forten/dragdrop'
import { locale } from '@forten/locale'
import { styled } from '@forten/styled'
import { theme } from '@forten/theme'
import { tree } from '@forten/tree'
import * as actions from './actions'
import { settings } from './settings'
import { TreeViewConfig } from './types'

export * from './components'
export * from './settings/theme'
export * from './types'

export const treeView: Block<TreeViewConfig> = {
  name: 'treeView',
  dependencies: [tree, locale, theme, dragdrop, styled],
  settings,
  state: {
    treeView: {
      library: [],
      dropTarget: {},
      uimap: {},
    },
  },
  actions: {
    treeView: actions,
  },
}

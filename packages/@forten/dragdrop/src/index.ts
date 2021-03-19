import { Block, settings } from '@forten/build'
import { theme, ThemeSettings } from '@forten/theme'
import * as actions from './actions/index.js'
import { setup } from './setup.js'
import { dragdropTheme } from './theme.js'
import { DragdropConfig } from './types.js'

export * from './components/index.js'
export * from './draggable.js'
export * from './droppable.js'
export * from './fileDrop.js'
export * from './theme.js'
export * from './types.js'

export const dragdrop: Block<DragdropConfig> = {
  name: 'dragdrop',
  dependencies: [theme],
  setup,
  settings: settings<ThemeSettings>({
    theme: {
      default: dragdropTheme,
    },
  }),
  state: {
    dragdrop: {
      // Mouse position
      position: { x: 0, y: 0 },
      definitions: () => ({
        types: {},
        dragTransform: {},
        dropTransform: {},
      }),
    },
  },
  actions: {
    dragdrop: actions,
  },
}

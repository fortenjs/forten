import { Block } from '@forten/build'
import { dragdrop } from '@forten/dragdrop'
import { hooks } from '@forten/hooks'
import { locale } from '@forten/locale'
import { shortcuts } from '@forten/shortcuts'
import { styled } from '@forten/styled'
import { theme } from '@forten/theme'
import * as actions from './actions/index.js'
import { EditorConfig } from './editorConfig.js'
import * as effects from './effects/index.js'
import { hooksActions } from './hooksActions.js'
import { settings } from './settings/index.js'
import { setup } from './setup.js'
import * as v2 from './v2/overmind/index.js'
export * from './components/index.js'
export {
  ElementTag,
  ElementTagProps,
  getInputValue,
} from './components/index.js'
export { EditorConfig, UndoStore } from './editorConfig.js'
export * from './helpers.js'
export {
  CompositionType,
  EditorOptions,
  ElementType,
  getTitle,
  InitFunction,
  isCustomElement,
  isGroupElement,
  isStringElement,
  isTitle,
  newComposition,
  NewCompositionOptions,
  ParagraphOption,
  ParagraphProps,
  PasteArgs,
  PasteOperation,
} from './lib/index.js'
export { caretSelection } from './lib/utils/caretSelection.js'
export { customParagraphs } from './lib/utils/customParagraphs.js'
export { firstId } from './lib/utils/firstId.js'
export { SortAscending as sortedIds } from './lib/utils/getNeighbours.js'
export { isEmptyComposition } from './lib/utils/isEmpty.js'
export { lastId } from './lib/utils/lastId.js'
export { rangeSelection } from './lib/utils/rangeSelection.js'
export { makeComposition, MakeComposition } from './lib/utils/testUtils.js'
export * from './paragraphs/index.js'
export { editorTheme } from './theme.js'
export * from './types.js'

export const editor: Block<EditorConfig> = {
  name: 'editor',
  dependencies: [dragdrop, hooks, locale, styled, shortcuts, theme],
  setup,
  settings,
  state: {
    editor: {
      store: {
        idx: 0,
        store: [],
        path: '',
      },
      // These are dummy value replaced
      options: {} as any,
    },
  },
  actions: {
    hooks: hooksActions,
    editor: actions,
    edit: v2,
  },
  effects: {
    editor: effects,
  },
}

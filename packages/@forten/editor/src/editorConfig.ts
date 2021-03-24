import * as actions from './actions/index.js'
import * as effects from './effects/index.js'
import { hooksActions } from './hooksActions.js'
import { EditorProvider } from './lib/utils/types.js'
import * as v2 from './v2/overmind/index.js'

export interface UndoStore {
  store: string[]
  idx: number
  // Stores the document path. Store is reset if path changes.
  path: string
}

export interface EditorConfig {
  state: {
    editor: {
      store: UndoStore

      options: () => EditorProvider
    }
  }
  actions: {
    hooks: typeof hooksActions
    editor: typeof actions
    edit: typeof v2
  }
  effects: {
    editor: typeof effects
  }
}

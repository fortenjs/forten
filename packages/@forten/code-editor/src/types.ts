import * as actions from './actions/index.js'

export interface CodeData {
  code: {
    lang: string
    source: string
  }
}

export interface CodeEditorConfig {
  state: {
    codeEditor: {}
  }

  actions: {
    codeEditor: typeof actions
  }
}

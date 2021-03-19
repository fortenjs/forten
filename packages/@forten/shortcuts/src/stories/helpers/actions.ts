import { Action } from './index.js'

export const setMessage: Action<string> = function keypress({ state }, value) {
  state.test.message = value
}

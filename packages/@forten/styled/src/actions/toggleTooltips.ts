import { Action } from '../app.js'

export const toggleTooltips: Action = ctx => {
  const { state } = ctx
  state.styled.showTips = !state.styled.showTips
}

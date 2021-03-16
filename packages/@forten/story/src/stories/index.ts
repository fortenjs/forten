import { renderStories } from '../index.js'
import * as stories from './all.js'

declare var module: any

renderStories({}, stories)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

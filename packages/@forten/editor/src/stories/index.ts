import { renderStories } from '@forten/story'
import * as stories from './all.js'

declare var module: any

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

renderStories({ devtools: false }, stories)

import { renderStories } from '@forten/story'
import * as stories from './all'

declare var module: any

renderStories({ devtools: false }, stories)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

import { EditorSettings } from '../../types.js'
import { paste } from './paste/index.js'
import { video } from './videoParagraph.js'

export const editor: EditorSettings['editor'] = {
  paragraphs: {
    video,
  },
  paste,
}

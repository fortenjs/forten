import {
  PASTE_EDITOR,
  PASTE_HTML,
  PASTE_TEXT,
} from '../../../lib/utils/types.js'
import { pasteEditor } from './pasteEditor.js'
import { pasteHtml } from './pasteHtml.js'
import { pasteText } from './pasteText.js'

// Order matters as we try from first to last.
export const paste = {
  [PASTE_EDITOR]: pasteEditor,
  [PASTE_HTML]: pasteHtml,
  [PASTE_TEXT]: pasteText,
}

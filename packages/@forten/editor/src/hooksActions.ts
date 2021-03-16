import { makeHook } from '@forten/hooks'
import { CompositionType } from './lib/index.js'
import { editor_pasteEditor } from './types.js'

export const hooksActions = {
  [editor_pasteEditor]: makeHook<{ composition: CompositionType }>(
    editor_pasteEditor
  ),
}

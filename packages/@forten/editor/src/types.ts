import { Reference } from '@forten/build'
import { Hook } from '@forten/hooks'
import {
  CompositionHolder,
  CompositionType,
  EditorOptions,
} from './lib/utils/types.js'

export { CompositionHolder, CustomParagraphOption } from './lib/utils/types.js'
export const editor_pasteEditor = 'editor_pasteEditor'
export const SPACER = '\u200B'

// Family to display next to DragBar
export const editor_dragBar = 'editor_dragBar'

// Family to display in title extra
export const editor_titleExtra = 'editor_titleExtra'

// Drag type
export const dragParaType = 'editorPara'

export type EditorParaDrag = EditorParaRefDrag | EditorParaDataDrag

export function isParaRefDrag(
  value: EditorParaDrag
): value is EditorParaRefDrag {
  return (value as any).sourceRef !== undefined
}

export interface EditorParaDataDrag {
  // Custom paragraph definition
  c: string
  data: any
}

export interface EditorParaRefDrag {
  sourceRef: Reference<CompositionHolder>
  // Can be undefined if dragging did not start in an editor
  sourceCompId?: string
  // Source paragraph id
  sourceId: string
}

export interface EditorParaDrop {
  // Target
  holderRef: Reference<CompositionHolder>
  // Target compId
  compId: string
  // Target paragraph id (if empty => after current selection)
  id?: string
}

export interface EditorHooks {
  [editor_pasteEditor]?: Hook<{ composition: CompositionType }>
}

export interface EditorSettings {
  editor?: EditorOptions
}

import { Position } from './position.js'

export interface ToolboxDisplay {
  type: 'emptyParagraph' | 'paragraph' | 'selection'
  position: Position
}

interface ToolboxNone {
  type: 'none'
}

export type Toolbox = ToolboxDisplay | ToolboxNone

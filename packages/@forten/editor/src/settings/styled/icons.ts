import {
  IconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core/index.js'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons/faAlignCenter.js'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons/faAlignJustify.js'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft.js'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons/faAlignRight.js'
import { faColumns } from '@fortawesome/free-solid-svg-icons/faColumns.js'
import { faParagraph } from '@fortawesome/free-solid-svg-icons/faParagraph.js'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons/faPenAlt.js'
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo.js'
import { faUndo } from '@fortawesome/free-solid-svg-icons/faUndo.js'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo.js'

export const icons: { [key: string]: IconDefinition } = {
  P: faParagraph,
  Video: faVideo,
  Column: faColumns,
  align_j: faAlignJustify,
  // default
  align_d: faAlignJustify,
  align_l: faAlignLeft,
  align_c: faAlignCenter,
  align_r: faAlignRight,
  OpenPopup: faPenAlt,
  PageBreak: faParagraph,
  Undo: faUndo,
  Redo: faRedo,
}

library.add(...Object.keys(icons).map(k => icons[k]))

import { DragdropSettings } from '@forten/dragdrop'
import { DraggedParagraph } from '../../components/index.js'

export const dragdrop: DragdropSettings['dragdrop'] = {
  types: {
    editorPara: {
      component: DraggedParagraph,
    },
  },
}

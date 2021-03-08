import { DragdropSettings } from '@forten/dragdrop'
import { DraggedParagraph } from '../../components'

export const dragdrop: DragdropSettings['dragdrop'] = {
  types: {
    editorPara: {
      component: DraggedParagraph,
    },
  },
}

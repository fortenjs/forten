import { DragdropSettings } from '@forten/dragdrop'
import { Nodes } from '../../components'
import * as hooks from './hooks'

export const dragdrop: DragdropSettings['dragdrop'] = {
  types: {
    tree: {
      hooks,
      component: Nodes,
      dragProps: { noDrop: true },
    },
  },
}

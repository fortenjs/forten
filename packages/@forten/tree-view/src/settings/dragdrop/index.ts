import { DragdropSettings } from '@forten/dragdrop'
import { Nodes } from '../../components/index.js'
import * as hooks from './hooks/index.js'

export const dragdrop: DragdropSettings['dragdrop'] = {
  types: {
    tree: {
      hooks,
      component: Nodes,
      dragProps: { noDrop: true },
    },
  },
}

import { StyledSettings } from '@forten/styled'
import { editor_dragBar, editor_titleExtra } from '../../types.js'
import { icons } from './icons.js'

export const styled: StyledSettings['styled'] = {
  family: {
    // Setup empty folder
    [editor_titleExtra]: {},
    // Setup empty folder
    [editor_dragBar]: {},
  },
  icons,
}

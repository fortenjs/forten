import {
  DropTarget as component,
  DropTargetProps as Props,
} from '../../index.js'
import { config, Stories, svgWrapper } from '../helper.js'

export const dropTarget: Stories<Props> = {
  name: 'DropTarget',
  config: config,
  wrapper: svgWrapper,
  stories: [
    {
      name: 'simple',
      component,
      props: ctx => ({
        slotIdx: 0,
        uinode: ctx.state.test.uigraph.uiNodeById['fooId'],
      }),
    },
  ],
}

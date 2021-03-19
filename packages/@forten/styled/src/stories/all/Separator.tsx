import { ComponentWrapper } from '@forten/story'
import { styled } from '../../app.js'
import { Separator as component } from '../../index.js'
import { config, Stories } from '../helpers.js'

const Wrapper = styled(ComponentWrapper)`
  display: flex;
  width: 20rem;
  padding: 10px;
`

export const separatorStories: Stories<{}> = {
  component,
  config,
  wrapper: Wrapper,
  name: 'Separator',
  stories: [
    {
      name: 'simple',
      props: {},
    },

    {
      name: 'theme separatorBorder',
      props: {},
      theme: { separatorBorder: '1px solid orange' },
    },
  ],
}

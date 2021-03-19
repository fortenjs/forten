import { Library as component, LibraryProps as Props } from '../../index.js'
import { config, Stories, styled } from '../helper.js'

const Wrapper = styled.div`
  display: flex;
  height: 100px;
  width: 190px;
  background: yellow;
`

export const library: Stories<Props> = {
  name: 'Library',
  config: config,
  wrapper: Wrapper,
  stories: [
    {
      name: 'simple',
      component,
      props: ctx => ({
        focused: true,
      }),
    },
  ],
}

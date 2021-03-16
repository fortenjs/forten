import * as React from 'react'
import { Comp, styled, theme } from '../../app.js'
import { Children } from '../Children.js'
import { ScrollDiv } from '../ScrollDiv.js'
export * from './InspectorGroup.js'
export * from './InspectorIcon.js'
export * from './InspectorWidget.js'

const Wrap = styled(ScrollDiv)`
  min-width: ${theme.inspectorWidth};
  background: ${theme.inspectorBackground};
  box-shadow: 0px 0px 10px #252525;
  z-index: 7;
  flex-shrink: 0;
  overflow: auto;
`

const Groups = styled(Children)`
  display: flex;
  flex-direction: column;
`

export interface InspectorProps {
  className?: string
  width?: number
  name?: string
}

export const Inspector: Comp<InspectorProps> = ({ name, width, className }) => {
  return (
    <Wrap className={className} style={width ? { width } : {}}>
      <Groups family={name || 'inspector'} />
    </Wrap>
  )
}

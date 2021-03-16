import { styled, theme } from '../app.js'

export const Separator = styled.div`
  border: ${theme.separatorBorder};
  border-width: ${theme.separatorBorderWidth};
  flex-grow: 1;
`
Separator.displayName = 'Separator'

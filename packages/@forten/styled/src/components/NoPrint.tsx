import { styled } from '../app.js'

export const NoPrint = styled.div`
  @media print {
    visibility: hidden;
  }
`
NoPrint.displayName = 'NoPrint'

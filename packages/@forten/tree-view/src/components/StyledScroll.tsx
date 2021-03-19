import { styled } from '../app.js'

export const StyledScroll = styled.div`
  &:focus {
    outline: none;
    border: 1px solid #ffa50038;
  }
  border: 1px solid #282828;
  &::-webkit-scrollbar-track {
    background-color: #282828;
    border-left: 1px solid #222;
  }

  &&::-webkit-scrollbar {
    border-radius: 8px;
    background-color: #777;
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #3d3d3d;
  }
`

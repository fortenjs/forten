import { Action } from '../app.js'
import { ResizeArg } from '../components/index.js'

export const resize: Action<{
  name: string
  value: ResizeArg
}> = (ctx, { name, value }) => {
  let size = ctx.state.styled.sizes[name]
  if (!size) {
    size = ctx.state.styled.sizes[name] = {}
  }
  if (value.height) {
    size.height = value.height
  }
  if (value.width) {
    size.width = value.width
  }
}

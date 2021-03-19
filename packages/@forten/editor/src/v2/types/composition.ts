import { Elements } from './element.js'
import { Sizes } from './size.js'
import { Toolbox } from './toolbox.js'

export interface Composition {
  sz?: Sizes

  toolbox?: Toolbox
  // Data for custom components.
  data?: { [key: string]: any }
  g: Elements
  // Path to object containing selection encoded as 'key.subKey.subsubKey'
  spath?: string
  // selection min paragraph position
  smin?: number
  // selection max paragraph position
  smax?: number
  // Title of the composition (when there is one)
  title?: string
}

import { CompositionHolder } from '../lib/index.js'

export function clearToolbox(holder: CompositionHolder) {
  if (holder.composition!.toolbox) {
    delete holder.composition!.toolbox
  }
}

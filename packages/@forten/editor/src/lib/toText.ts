import { toHTML } from './toHTML.js'
import { CompositionType } from './utils/types.js'

export function toText(composition: CompositionType): string {
  const html = toHTML(composition)
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

import { endCaretSelection, siblings } from '../helpers/index.js'
import { deleteParagraph as del, setSelection } from '../operations/index.js'
import { Mutation } from '../types/index.js'

export function deleteParagraph(m: Mutation, id: string) {
  if (del(m, id)) {
    const [prev] = siblings(m.comp, [], id, m.sortedIds)
    if (!prev) {
      return false
    }
    setSelection(m, endCaretSelection(prev!))
    return true
  }
  return false
}

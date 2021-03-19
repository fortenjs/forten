import { caretSelection } from './caretSelection.js'
import { extractSelection } from './extractSelection.js'
import {
  ChangesType,
  CompositionType,
  filterChanges,
  RangeSelectionType,
} from './types.js'

export function deleteRangeSelection(
  composition: CompositionType,
  selection: RangeSelectionType
): ChangesType {
  const changes = extractSelection(composition, selection)
  const { elements, start } = changes
  console.log('ESEL', JSON.parse(JSON.stringify(changes)))

  // Transform selections into delete changes
  filterChanges(elements, 'selected').forEach(change => {
    delete change.selected
    change.op = change.op === 'create' ? 'noop' : 'delete'
  })
  changes.selection = caretSelection(start.path, start.elem.i!.length)
  return changes
}

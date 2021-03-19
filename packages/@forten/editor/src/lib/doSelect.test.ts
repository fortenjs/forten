import { describe, expect, it } from 'test'
import { doSelect } from './doSelect.js'
import { mockComposition } from './utils/testUtils.js'
import { CaretSelectionType, RangeSelectionType } from './utils/types.js'

const composition = mockComposition()
const position = { top: 0, left: 0 }

describe('doSelect', () => {
  it('shows start of line toolbox', () => {
    const selection: CaretSelectionType = {
      anchorPath: ['para3'],
      anchorOffset: 0,
      position,
      type: 'Caret',
    }
    expect(doSelect(composition, selection)).toEqual([
      { op: 'select', value: selection },
      {
        op: 'toolbox',
        value: { type: 'paragraph', position },
      },
    ])
  })

  it('shows select toolbox', () => {
    const selection: RangeSelectionType = {
      anchorPath: ['para1', 'span12', 'span122'],
      anchorOffset: 0,
      position,
      focusPath: ['para1', 'span12', 'span122'],
      focusOffset: 4,
      type: 'Range',
    }
    expect(doSelect(composition, selection)).toEqual([
      { op: 'select', value: selection },
      {
        op: 'toolbox',
        value: { type: 'selection', position },
      },
    ])
  })
})

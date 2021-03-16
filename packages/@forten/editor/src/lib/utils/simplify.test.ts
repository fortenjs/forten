import { describe, expect, it } from 'test'
import { applyOp } from './applyOp.js'
import { extractSelection } from './extractSelection.js'
import { rangeSelection } from './rangeSelection.js'
import { simplify } from './simplify.js'
import { changesResults, mockComposition } from './testUtils.js'

const composition = mockComposition()

describe('simplify', () => {
  it('merges same elements', () => {
    const selection = rangeSelection(
      ['para2', 'span22'],
      0,
      ['para2', 'span22'],
      7
    )
    const rawChanges = applyOp(extractSelection(composition, selection), 'B')

    const simplified = simplify(composition, rawChanges)
    expect(changesResults(simplified).updated).toEqual(['para2-P [1]'])

    expect(simplified.elements['para2'].elem.i).toEqual(
      // All fused in parent
      'This is the first message. Hello blah bomgolo frabilou elma tec.'
    )
  })
})

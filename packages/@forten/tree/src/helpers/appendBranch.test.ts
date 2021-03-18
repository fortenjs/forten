import { TreeType } from '@forten/tree-type'
import { describe, expect, it } from 'test'
import { appendBranch } from './appendBranch.js'

type MockBlock = [string, string[]]

function mockBranch(def: MockBlock[], id: string = 'base'): TreeType {
  return {
    id,
    type: 'test',
    version: 'v1',
    entry: def[0][0],
    blocks: Object.assign(
      {},
      ...def.map(m => ({
        [m[0]]: { id: m[0], name: m[0], children: m[1], content: {}, meta: {} },
      }))
    ),
  }
}

describe('appendBranch', () => {
  it('should remap ids', () => {
    const graph = mockBranch([
      ['foo', ['bar', 'baz']],
      ['bar', ['bing']],
      ['baz', []],
      ['bing', []],
    ])
    const branch = mockBranch([
      ['yo', ['bar']],
      ['bar', ['bing']],
      ['bing', []],
    ])
    appendBranch(graph, 'baz', 1, branch)
    const children = graph.blocks['baz'].children
    expect(children).toEqual([null, 'yo'])
    const yo = graph.blocks['yo']
    const newId = yo.children[0]
    expect(typeof newId).toBe('string')
    expect(newId).not.toBe('bar')
    expect(graph.blocks[newId!].name).toBe('bar')
  })

  it('should throw on missing node', () => {
    const graph = mockBranch([
      ['foo', ['bar', 'baz']],
      ['bar', ['bing']],
      ['baz', []],
      ['bing', []],
    ])
    const branch = mockBranch([
      ['yo', ['bar']],
      ['bar', ['bing']],
      ['bing', []],
    ])
    expect(() => appendBranch(graph, 'doom', 1, branch)).toThrow(
      `Cannot append (blockId 'doom' not in tree).`
    )
  })
})

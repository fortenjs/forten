import { testStories } from '@forten/story'
import { restore } from 'test'
import { mockRef } from '../lib/utils/testUtils.js'
import * as stories from './all.js'

testStories(
  {
    beforeEach: mockRef,
    afterEach: restore,
  },
  stories
)

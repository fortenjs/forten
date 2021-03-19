// Mutations trigger operations and correspond to one event (aka action). A
// mutation does all the job, including changing selection.
export {
  applyStyle,
  deleteParagraph,
  removeRange,
  setSelection,
} from '../operations/index.js'
export * from './collapseUp.js'
export * from './newParagraph.js'
export * from './removePreviousChar.js'
export * from './textChanged.js'

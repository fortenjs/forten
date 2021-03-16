// Operations do part of the job, triggering other operations if needed. They do
// not execute 'cleanup' tasks such as sortedId update or selection updtae.
// They are the ones triggering hooks.
export * from './addDepth.js'
export * from './applyStyle.js'
export * from './applyToRange.js'
export * from './changeText.js'
export * from './clearSelection.js'
export * from './deleteParagraph.js'
export * from './newElement.js'
export * from './newParagraph.js'
export * from './removeRange.js'
export * from './setSelection.js'
export * from './simplify.js'
export * from './splitParagraph.js'

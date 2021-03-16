import { IReactComponent } from 'overmind-react'
import * as React from 'react'
import { Comp, useOvermind } from '../../app.js'
import { getAtPath } from '../../lib/utils/getAtPath.js'
import {
  CompositionHolder,
  isCustomElement,
  isDocumentTitle,
  isGroupElement,
  isStringElement,
} from '../../lib/utils/types.js'
import { EditorProps } from '../Editor.js'
import { CustomTag } from './CustomTag.js'
import { GroupTag } from './GroupTag.js'
import { StringTag } from './StringTag.js'

export { BarIcon } from './DragBar.js'

export interface ElementTagProps {
  // Composition id (when displaying a full composition).
  compId?: string
  editorProps: EditorProps
  holder: CompositionHolder
  isParagraph?: boolean
  // Unique id of the element
  id: string
  // Path to the element inside the composition. For root
  // paragraphs, path === [id]
  path: string[]
}

export type ElementTagType = IReactComponent<ElementTagProps>

export const ElementTag: Comp<ElementTagProps> = React.memo(
  ({ editorProps, id, path, isParagraph, compId }) => {
    // start tracking
    const ctx = useOvermind()
    const { holder, titlePlaceholder } = editorProps

    if (!holder.composition) {
      // Edit or display an item without a composition: create one
      // on the fly...
      ctx.actions.editor.ensureComposition({ holder })
      return null
    }
    const elem = getAtPath(holder.composition, path, true)
    if (!elem) {
      return null
    }

    if (isCustomElement(elem)) {
      return (
        <CustomTag
          key={id}
          id={id}
          dragged={editorProps.dragged}
          readonly={editorProps.readonly}
          customTagProps={editorProps.customTagProps || {}}
          elem={elem}
          compId={compId}
          holder={holder}
        />
      )
    } else if (isStringElement(elem)) {
      return (
        <StringTag
          key={id}
          id={id}
          dragged={editorProps.dragged}
          readonly={editorProps.readonly}
          isParagraph={isParagraph}
          elem={elem}
          compId={compId}
          holder={holder}
          titlePlaceholder={
            isDocumentTitle(elem) ? titlePlaceholder : undefined
          }
        />
      )
    } else if (isGroupElement(elem)) {
      return (
        <GroupTag
          dragged={editorProps.dragged}
          readonly={editorProps.readonly}
          isParagraph={isParagraph}
          compId={compId}
          editorProps={editorProps}
          id={id}
          holder={holder}
          path={path}
          key={id}
        />
      )
    } else {
      console.log(elem)
      throw new Error(
        `Invalid element '${id}' in composition '${holder}' (${JSON.stringify(
          elem
        )}).`
      )
    }
  }
)

import { EditorConfig } from '../../editorConfig.js'
import { SortAscending } from './getNeighbours.js'
import {
  CompositionHolder,
  CustomParagraphInfo,
  isCustomElement,
} from './types.js'

export function customParagraphs(
  ctx: {
    state: {
      editor: EditorConfig['state']['editor']
    }
  },
  holder: CompositionHolder
): CustomParagraphInfo[] {
  /*
  const opts = ctx.state.editor.options()
  const { composition } = holder
  if (!composition) {
    return []
  }
  const list: CustomParagraphInfo[] = []
  const { g, data } = composition
  if (!data) {
    return []
  }
  SortAscending(g).forEach(id => {
    const elem = g[id]
    if (isCustomElement(elem)) {
      const paraData = data[id]
      if (!paraData) {
        return
      }
      const settings = opts.paragraphs[elem.c]
      if (settings && settings.icon && settings.getInfo) {
        const info = settings.getInfo(ctx, paraData)
        if (info) {
          list.push({
            icon: info.icon,
            id,
            title: info.title,
            type: elem.c,
            data: paraData,
            exported: elem.o && elem.o.e,
          })
        }
      }
    }
  })
  return list
  */
  SortAscending({} as any)
  isCustomElement({} as any)
  return []
}

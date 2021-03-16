import {
  IconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core/index.js'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch.js'

export const icons: { [key: string]: IconDefinition } = {
  code: faSearch,
}

library.add(...Object.keys(icons).map(k => icons[k]))

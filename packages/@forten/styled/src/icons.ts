import {
  IconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core/index.js'
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare.js'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown.js'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight.js'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare.js'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle.js'

export const icons: { [key: string]: IconDefinition } = {
  CheckboxOn: faCheckSquare,
  CheckboxOff: faSquare,
  Recursive: faAngleRight,
  RecursiveOpen: faAngleDown,
  RecursiveClose: faAngleRight,
  Tooltips: faQuestionCircle,
}

library.add(...Object.keys(icons).map(k => icons[k]))

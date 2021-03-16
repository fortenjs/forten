import {
  IconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core/index.js'
import { faCircle as faOff } from '@fortawesome/free-regular-svg-icons/faCircle.js'
import { faCircle as faOn } from '@fortawesome/free-solid-svg-icons/faCircle.js'

export const icons: { [key: string]: IconDefinition } = {
  Online: faOn,
  Offline: faOff,
}

library.add(...Object.keys(icons).map(k => icons[k]))

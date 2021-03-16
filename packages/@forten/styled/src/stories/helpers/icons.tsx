import {
  IconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core/index.js'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope.js'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder.js'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen.js'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock.js'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus.js'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner.js'
import { faSplotch } from '@fortawesome/free-solid-svg-icons/faSplotch.js'
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync.js'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes.js'
import { faTooth } from '@fortawesome/free-solid-svg-icons/faTooth.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash.js'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser.js'

export const icons: { [key: string]: IconDefinition } = {
  add: faPlus,
  email: faEnvelope,
  user: faUser,
  username: faUser,
  password: faLock,
  folder: faFolder,
  folderOn: faFolderOpen,
  loading: faSpinner,
  Validate: faTooth,
  PleaseLogin: faLock,
  ResetField: faTimes,
  RefreshField: faSync,
  InvalidUsernameOrPassword: faTrash,
  TooManyEmotions: faSplotch,
  // inspector
  document1: faTooth,
  document2: faFolder,
  navigation1: faLock,
  navigation2: faUser,
}

library.add(...Object.keys(icons).map(k => icons[k]))

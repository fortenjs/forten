import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.js'
import * as React from 'react'
import { Comp } from '../app.js'
import { IconComponentProps } from '../types.js'

export const FaIconComponent: Comp<IconComponentProps> = React.forwardRef<
  HTMLSpanElement,
  IconComponentProps
>(({ icon, icons, children, className, fixedWidth, spin, ...props }, ref) => {
  const theIcon = icons[icon]
  if (!theIcon) {
    throw new Error(`Missing icon '${icon}'.`)
  }
  return (
    <span className={className} ref={ref} {...props}>
      <FontAwesomeIcon icon={theIcon} fixedWidth={fixedWidth} spin={spin} />
      {children}
    </span>
  )
})

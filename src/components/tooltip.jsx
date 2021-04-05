import React, { useState, useRef, useEffect } from 'react'

import { STooltip, TooltipContent, TooltipPointer } from './styles/tooltip'

function Tooltip({
  direction,
  spacing = 8,
  children,
  attrs,
  ...otherProps
}) {
  const [show, setShow] = useState(false)

  const tooltipRef = useRef()

  useEffect(() => {
    const handleMouseEnter = ({ target }) => {
      const { current : tooltip } = tooltipRef

      const triggerRect = target.getBoundingClientRect()
      const tooltipRect = tooltip.getBoundingClientRect()

      switch(direction) {
        case 'top':
          tooltip.style.top =
            `${triggerRect.y - tooltipRect.height - spacing}px`
          tooltip.style.left =
            `${triggerRect.x + triggerRect.width/2 - tooltipRect.width/2}px`
          break
        case 'left':
          tooltip.style.top =
            `${triggerRect.y + triggerRect.height/2 - tooltipRect.height/2}px`
          tooltip.style.left =
            `${triggerRect.x - tooltipRect.width - spacing}px`
          break
        case 'right':
          tooltip.style.top =
            `${triggerRect.y + triggerRect.height/2 - tooltipRect.height/2}px`
          tooltip.style.left =
            `${triggerRect.x + triggerRect.width + spacing}px`
          break
        case 'bottom':
          tooltip.style.top =
            `${triggerRect.y + triggerRect.height + spacing}px`
          tooltip.style.left =
            `${triggerRect.x + triggerRect.width/2 - tooltipRect.width/2}px`
          break
        default:
          break
      }

      setShow(true)
    }

    const handleMouseLeave = () => {
      setShow(false)
    }

    const { current : tooltip } = tooltipRef
    const { parentElement : trigger } = tooltip

    trigger.addEventListener('mouseenter', handleMouseEnter)
    trigger.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      trigger.removeEventListener('mouseenter', handleMouseEnter)
      trigger.removeEventListener('mouseleave', handleMouseLeave)
    }

  }, [direction, spacing])

  return (
    <STooltip
      direction={direction}
      show={show}
      ref={tooltipRef}
      attrs={attrs}
      {...otherProps}
    >
      <TooltipContent>
        {children}
        <TooltipPointer />
      </TooltipContent>
    </STooltip>
  )
}

export default Tooltip

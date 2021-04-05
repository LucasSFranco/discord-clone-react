import React from 'react'

import {
  SRadioGroup,
  SRadioGroupRadioBar
} from './styles/radio-group'

import { CustomRadioInput } from '@assets'

function RadioGroup({ name, children, attrs, ...otherProps }) {

  return (
    <SRadioGroup attrs={attrs} {...otherProps}>
      {
        React.Children.toArray(children).map((child, id) => (
          React.cloneElement(child, { name, id: `${name}-${id}` })
        ))
      }
    </SRadioGroup>
  )
}

RadioGroup.RadioBar = function RadioGroupRadioBar({
  id,
  name,
  children,
  attrs,
  ...otherProps
}) {
  return (
    <SRadioGroupRadioBar attrs={attrs}>
      <input type='radio' name={name} id={id} {...otherProps} />
      <label htmlFor={id}>
        <CustomRadioInput />
        {children}
      </label>
    </SRadioGroupRadioBar>
  )
}

export default RadioGroup

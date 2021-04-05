import React from 'react'

import { STextArea, STextAreaFileInput } from './styles/text-area'

import { PlusCircle } from '@assets'

function TextArea({ editable, content, children, attrs, ...otherProps }) {
  return (
    <STextArea attrs={attrs} editable={editable}>
      {children}
      <main contentEditable={editable} aria-multiline {...otherProps}>
        {content}
      </main>
    </STextArea>
  )
}

TextArea.FileInput = function TextAreaFileInput({ children, attrs, ...otherProps }) {
  return (
    <STextAreaFileInput
      attrs={attrs}
      htmlFor='text-area-file-input'
    >
      <PlusCircle />
      <input
        type='file'
        id='text-area-file-input'
        {...otherProps}
      />
    </STextAreaFileInput>
  )
}

export default TextArea

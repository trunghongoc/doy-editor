import { useState, useImperativeHandle } from 'react'

import ReactQuill from 'react-quill'

import { IProps } from './type'
import './style.scss'

export function QuillEditor(props: IProps): JSX.Element {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (newValue: string): void => {
    setValue(newValue)
  }

  return (
    <>
      <ReactQuill value={value} onChange={handleOnChange} theme={props.theme} />
    </>
  )
}

QuillEditor.defaultProps = {
  theme: 'snow'
}

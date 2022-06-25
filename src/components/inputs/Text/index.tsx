import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { IProps } from './type'
import s from './style.module.scss'

export const InputText = (props: IProps): JSX.Element => {
  const [uid] = useState<string>(uuid())

  return (
    <span className={s.input}>
      <input
        type="text"
        id={uid}
        placeholder={props.placeholder}
        required={props.isRequired}
      />

      <label htmlFor={uid}>
        {props.label}

        {props.isRequired && <span>*</span>}
      </label>
    </span>
  )
}

InputText.defaultProps = {
  label: '',
  placeholder: '',
  isRequired: false
}

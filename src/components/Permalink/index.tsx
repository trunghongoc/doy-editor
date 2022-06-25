import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { IProps } from './type'
import s from './style.module.scss'

export const Permalink = (props: IProps): JSX.Element => {
  const [uid] = useState<string>(uuid())

  return (
    <div className={s.permalink}>
      <span>Permalink:</span>
    </div>
  )
}

Permalink.defaultProps = {}

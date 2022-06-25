import { IProps } from './type'
import s from './style.module.scss'

export const Button = (props: IProps): JSX.Element => {
  return (
    <button className={s.button}>
      {props.label} {props.children}
    </button>
  )
}

Button.defaultProps = {
  label: ''
}

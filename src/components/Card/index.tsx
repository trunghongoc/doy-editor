import { Children, useMemo } from 'react'
import { IProps } from './type'
import s from './style.module.scss'

const Blank = (): JSX.Element => <span />

export const Card = (props: IProps): JSX.Element => {
  const slots = useMemo((): any => {
    const children: any[] = Children.toArray(props.children)

    return {
      header: children.find(
        (element: any): any => element?.props?.slot === 'header'
      ) || <Blank />,
      body: children.find(
        (element: any): any => element?.props?.slot === 'body'
      ) || <Blank />
    }
  }, [])

  return (
    <div className={s.card}>
      <div className={s.header}>{slots.header}</div>

      <div className={s.body}>{slots.body}</div>
    </div>
  )
}

Card.defaultProps = {}

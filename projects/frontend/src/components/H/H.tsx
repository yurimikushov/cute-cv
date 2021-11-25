import { FC } from 'react'
import cn from 'classnames'
import HPropsT from './H.props'
import './H.css'

const H: FC<HPropsT> = ({ className, tag, children, ...props }) => {
  switch (tag) {
    case '1':
      return (
        <h1 className={cn(className, 'h h--1')} {...props}>
          {children}
        </h1>
      )
    case '2':
      return (
        <h2 className={cn(className, 'h h--2')} {...props}>
          {children}
        </h2>
      )
    default:
      throw new Error('[H] missing `tag`, this is required prop')
  }
}

export default H

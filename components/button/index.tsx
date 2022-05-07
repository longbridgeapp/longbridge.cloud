import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './index.module.scss'

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {

  return <button {...props} className={classNames(styles.button, 'primary', className)}>
    {children}
  </button>
}

export default Button
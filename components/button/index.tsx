import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './index.module.scss'

const Button: FC<HTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large'
}> = ({
  children,
  className,
  size = 'large',
  ...props
}) => {

  return <button {...props} className={classNames(styles.button, 'primary', className, `button-${size}`)}>
    {children}
  </button>
}

export default Button
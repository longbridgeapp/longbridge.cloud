import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './index.module.scss'

const Button: FC<HTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  disabled?: boolean
}> = ({
  children,
  className,
  size = 'large',
  loading = false,
  disabled = false,
  ...props
}) => {

  return <button type="button" disabled={disabled} {...props} className={classNames(styles.button, 'primary', className, `button-${size}`, {
    disabled: disabled || loading,
  })}>
    {children}
  </button>
}

export default Button
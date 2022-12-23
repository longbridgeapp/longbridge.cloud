import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './index.module.scss'

const Button: FC<
  HTMLAttributes<HTMLButtonElement> & {
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
    disabled?: boolean
    link?: boolean
    url?: string
  }
> = ({ children, className, size = 'large', loading = false, disabled = false, link = false, url = '', ...props }) => {
  if (link && url) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className={classNames(styles.button, 'primary', className, `button-${size}`, {
          disabled: disabled || loading,
        })}
      >
        <div>{children}</div>
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={classNames(styles.button, 'primary', className, `button-${size}`, {
        disabled: disabled || loading,
      })}
    >
      {children}
    </button>
  )
}

export default Button

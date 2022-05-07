import classNames from 'classnames'
import { FC } from 'react'
import styles from './index.module.scss'

const DivideDot: FC<{
  size?: 'small' | 'medium' | 'large'
}> = ({ size = 'small' }) => {
  return (
    <div className={classNames(styles['divide-dot'], 'mt-5 flex', size)}>
      <div className="bg-brand_color left"></div>
      <div className="bg-brand_color ml-4 right"></div>
    </div>
  )
}

export default DivideDot

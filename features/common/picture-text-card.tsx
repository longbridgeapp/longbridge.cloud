import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { FC } from 'react'
import styles from './picture-text-card.module.scss'

export const PictureTextCard: FC<{
  title?: string
  desc: string
  picture: string
}> = ({ desc, picture, title }) => {
  return (
    <div
      className={classNames(styles.card, {
        'with-title': !!title,
      })}
    >
      <div className="cover">
        <img src={picture} alt={desc} />
      </div>
      <div className="p-6">
        <div className="mt-1">
          <DivideDot />
        </div>
        {title && <p className="title">{title}</p>}
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        ></p>
      </div>
    </div>
  )
}

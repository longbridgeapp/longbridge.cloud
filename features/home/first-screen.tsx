import { FC, ReactNode } from 'react'
import Header from '@/features/header'
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'
import styles from './first-screen.module.scss'
import classNames from 'classnames'

export type IFirstScreenProps = {
  backgroundColor?: string
  backgroundImage?: string
  title: string | ReactNode
  titleNowrap?: boolean
  desc: string | ReactNode
  cover?: string
  contactUs?: boolean
  contentFLex?: string
}

export const FirstScreen: FC<IFirstScreenProps> = ({
  backgroundColor,
  backgroundImage,
  title,
  desc,
  contactUs = false,
  cover = '',
  contentFLex = '1',
  titleNowrap = false,
}) => {
  const i18n = useTranslation('common')

  return (
    <div
      className={styles['first-screen']}
      style={{
        backgroundColor,
        backgroundImage,
      }}
    >
      <div className="section-content-container">
        <Header />
        <div className="main-container pb-40 pt-20">
          <div className="flex main-content-width items-center">
            <div
              style={{
                flex: contentFLex,
              }}
            >
              <h2
                className={classNames('title', {
                  'whitespace-nowrap': titleNowrap,
                })}
              >
                {title}
              </h2>
              <p className=" desc">{desc}</p>
              {contactUs && false && <Button className="mt-8">{i18n.t('home_first_screen_001')}</Button>}
            </div>
            <div className="flex-1 ml-16">{cover && <img src={cover} alt="cover" />}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { FC, ReactNode } from 'react'
import Header from '@/features/header'
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'
import styles from './first-screen.module.scss'

export const FirstScreen: FC<{
  backgroundColor?: string
  backgroundImage?: string
  title: string | ReactNode
  desc: string
  cover?: string
  contactUs?: boolean
}> = ({ backgroundColor, backgroundImage, title, desc, contactUs = false, cover = '' }) => {
  const i18n = useTranslation()

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
            <div className="flex-1">
              <h2 className="title">{title}</h2>
              <p className="desc">{desc}</p>
              {contactUs && <Button className="mt-8">{i18n.t('Talk to Us')}</Button>}
            </div>
            <div className="flex-1 ml-16">{cover && <img src={cover} alt="cover" />}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

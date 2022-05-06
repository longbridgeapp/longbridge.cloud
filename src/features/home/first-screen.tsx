import { FC, ReactNode } from 'react'
import Header from '@/features/header'
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'
import styles from './first-screen.module.scss'

export const FirstScreen: FC<{
  background: string
  title: string | ReactNode
  desc: string
  cover?: string
  contactUs?: boolean
}> = ({
  background,
  title,
  desc,
  contactUs,
  cover
}) => {
  const i18n = useTranslation()

  return <div className={styles['first-screen']} style={{
    background
  }}>
    <div className="section-content-container">
      <Header />
      <div className="main-container pb-40 pt-20">
        <div className="flex main-content-width items-center">
          <div className="flex-1">
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
            {contactUs && <Button>
              {i18n.t('Talk to Us')}
              </Button>}
          </div>
          <div className="flex-1 ml-16">
            {cover && <img src={cover} alt="cover" />}
          </div>
        </div>
      </div>
    </div>
  </div>
}
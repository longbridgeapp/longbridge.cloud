import Button from '@/components/button'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

const ContactBanner: FC<{
  title?: string
  desc: string
}> = ({ title, desc }) => {
  const i18n = useTranslation('common')
  if (true) {
    return null
  }
  return (
    <div
      className="main-container py-[72px] bg-cover"
      style={{
        backgroundImage: 'url(https://pub.lbctrl.com/files/202205/F7iG2C1JNusS7NiW/Group_626630.png)',
      }}
    >
      <div className="main-content-width">
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="text-xl mt-5 text-text_color_1_supplement">{desc}</p>
        <Button size="medium" className="mt-6">
          {i18n.t('home_first_screen_001')}
        </Button>
      </div>
    </div>
  )
}

export default ContactBanner

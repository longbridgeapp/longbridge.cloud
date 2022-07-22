import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { TalkToUs } from './talk-to-us'

const FooterBanner: FC<{
  title?: string
  desc: string
}> = ({ title, desc }) => {
  const i18n = useTranslation('common')
  return (
    <div
      className="main-container py-[72px] bg-cover"
      style={{
        backgroundImage: 'url(https://pub.lbkrs.com/files/202207/6k3zHTMe9QJfFUho/.png)',
      }}
    >
      <div className="main-content-width">
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="mt-5 text-xl text-text_color_1_supplement">{desc}</p>
        <TalkToUs />
      </div>
    </div>
  )
}

export default FooterBanner

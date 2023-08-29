import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { FullMask } from '@/components/popup'
import Icon from '@/components/icon'

const formInfo: any = {
  'zh-HK': 'https://longbridge.feishu.cn/share/base/form/shrcnhxdx8hRz3BYtrdTA8qO1Vb?lang=zh-HK',
  'zh-CN': 'https://longbridge.feishu.cn/share/base/form/shrcn4MwXHaGJyGeZVD4O65ENTh?lang=zh',
  'en': 'https://longbridge.feishu.cn/share/base/form/shrcn2rJ7qwic0PAwBXbrw6Ucjd?lang=en',
}

const DemoForm = () => {
  const i18n = useTranslation('common')

  return (
    <div>
      <iframe src={formInfo[i18n.i18n.language]} height={600} width={'100%'}></iframe>
    </div>
  )
}

const ExperienceDemo = () => {
  const [visible, setVisible] = useState(false)
  const i18n = useTranslation('common')
  
  return (
    <>
      {visible && (
        <FullMask width={382} maskClosable={true} onCancel={() => setVisible(false)}>
          <div className="relative">
            <Icon
              type="close"
              className="absolute right-[15px] top-[10px] cursor-pointer text-[26px] text-[#ccc]"
              onClick={() => setVisible(false)}
            ></Icon>
            <DemoForm />
          </div>
        </FullMask>
      )}
      <div
        className="cursor-pointer mt-10 border border-brand_color text-brand_color h-[42px] px-2.5 flex items-center justify-center hover:text-brand_color_2 hover:border-brand_color_2"
        onClick={() => setVisible(true)}
      >
        {i18n.t('features_experience_demo_891117')}
      </div>
    </>
  )
}

export default ExperienceDemo

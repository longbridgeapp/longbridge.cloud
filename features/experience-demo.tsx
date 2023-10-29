import Button from '@/components/button'
import Icon from '@/components/icon'
import { FullMask } from '@/components/popup'
import classnames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

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

const ExperienceDemo = ({ className = '' }) => {
  const [visible, setVisible] = useState(false)
  const i18n = useTranslation('common')

  const openForm = () => {
    window.open(formInfo[i18n.i18n.language])
  }

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
      <Button
        size="medium"
        className={classnames(
          '!bg-transparent cursor-pointer mt-10 border border-brand_color !text-brand_color h-[42px] px-2.5 flex items-center justify-center hover:text-brand_color_2 hover:border-brand_color_2',
          className
        )}
        onClick={openForm}
      >
        {i18n.t('features_experience_demo_891117')}
      </Button>
    </>
  )
}

export default ExperienceDemo

import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import Icon from '@/components/icon'

const IMAGE_URL = 'https://pub.lbctrl.com/files/202207/H2KHstvbtQhWzHgC/Group_427318854.png'

const LongPortApp = ({ name, slogn }: { name: string; slogn: string }) => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'longport-app-1',
        desc: i18n.t('longport-app.item-1'),
      },
      {
        icon: 'longport-app-2',
        desc: i18n.t('longport-app.item-2'),
      },
      {
        icon: 'longport-app-3',
        desc: i18n.t('longport-app.item-3'),
      },
      {
        icon: 'longport-app-4',
        desc: i18n.t('longport-app.item-4'),
      },
      {
        icon: 'longport-app-5',
        desc: i18n.t('longport-app.item-5'),
      },
    ]
  }, [])

  return (
    <Block className="bg-bg_color_2">
      <BlockHeader title={i18n.t('longport-app.title')} desc={i18n.t('longport-app.desc', { name })} slogn={slogn} />
      <BlockBetween
        reverse
        left={
          <ul className="flex flex-col flex-1">
            {list.map(({ icon, desc }) => (
              <li className="flex items-center w-full py-8 lg:pr-5" key={icon}>
                <div className="mr-12">
                  <Icon type={icon} className="text-5xl" />
                </div>
                <dl>
                  <dd className="align-middle text-text_color_3">{desc}</dd>
                </dl>
              </li>
            ))}
          </ul>
        }
        right={<img src={IMAGE_URL} className="flex-1" alt="" />}
      />
    </Block>
  )
}

export default LongPortApp

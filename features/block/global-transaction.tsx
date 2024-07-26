import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import Icon from '@/components/icon'

const IMAGE_URL = 'https://pub.pbkrs.com/files/202207/7AK4zA3KmTnJcQZs/Group_627466.png'

const GlobalTransaction = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-1',
        desc: i18n.t('global-transaction.item-1'),
      },
      {
        icon: 'Union-2',
        desc: i18n.t('global-transaction.item-2'),
      },
      {
        icon: 'Union-3',
        desc: i18n.t('global-transaction.item-3'),
      },
      {
        icon: 'Union-4',
        desc: i18n.t('global-transaction.item-4'),
      },
    ]
  }, [])

  return (
    <Block>
      <BlockHeader
        title={i18n.t('global-transaction.title')}
        desc={i18n.t('global-transaction.desc')}
        slogn={i18n.t('global-transaction.slogn')}
      />
      <BlockBetween
        className="mt-5"
        left={<img src={IMAGE_URL} className="w-[450px]" alt="" />}
        right={
          <ul>
            {list.map(({ icon, desc }) => (
              <li className="flex py-5" key={icon}>
                <div className="mr-12">
                  <Icon type={icon} className="text-4xl" />
                </div>
                <dl className="flex items-center">
                  <dd className="text-text_color_3">{desc}</dd>
                </dl>
              </li>
            ))}
          </ul>
        }
      />
    </Block>
  )
}

export default GlobalTransaction

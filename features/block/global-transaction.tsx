import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import Icon from '@/components/icon'

const IMAGE_URL = 'https://pub.lbkrs.com/files/202207/7AK4zA3KmTnJcQZs/Group_627466.png'

const GlobalTransaction = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-1',
        desc: i18n.t('涵盖港股、美股、A 股通三个市场全部正股及 ETF 的交易能力'),
      },
      {
        icon: 'Union-2',
        desc: i18n.t('支持港股 IPO 申购、国际配售及暗盘交易'),
      },
      {
        icon: 'Union-3',
        desc: i18n.t('支持港股涡轮牛熊证交易'),
      },
      {
        icon: 'Union-4',
        desc: i18n.t('支持美股期权交易'),
      },
    ]
  }, [])

  return (
    <Block>
      <BlockHeader
        title={i18n.t('通过出色的交易能力吸引更多客户')}
        desc={i18n.t(
          '丰富的证券交易能力，提升您的服务能力和盈利能力。我们将通过我们的持续迭代帮助您创建值得期待的交易场景'
        )}
        slogn={i18n.t('全球交易')}
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

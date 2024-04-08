import { Tabs } from 'antd'
import styles from './brokerages.module.scss'
import { isServer } from '@/utils/common'
import Icon from '@/components/icon'
import DotList from '@/components/dot-list'
import { useTranslation } from 'react-i18next'
import Title from '../common/title'
import Link from 'next/link'
import classNames from 'classnames'

export const BrokeragesTabs = () => {
  const i18n = useTranslation('common')

  const tabs = [
    {
      tabTitle: i18n.t('pages_brokerages3'),
      key: '1',
      label: 'App',
      title: i18n.t('pages_brokerages4'),
      features: [
        i18n.t('pages_brokerages5'),
        i18n.t('pages_brokerages6'),
        i18n.t('pages_brokerages7'),
        i18n.t('pages_brokerages8'),
      ],
      img: {
        'en': 'https://assets.lbkrs.com/uploads/7d87e234-aea8-4cba-8206-1baa60aaa571/tab1_en.png',
        'zh-CN': 'https://assets.lbkrs.com/uploads/831e7c65-2c62-43fe-bba4-12331b2d8b87/tab1_cn.png',
        'zh-HK': 'https://assets.lbkrs.com/uploads/c9500dcb-2293-4955-874f-2df8e494a5bb/tab1_hk.png',
      },
    },
    {
      tabTitle: i18n.t('pages_brokerages9'),
      key: '2',
      label: i18n.t('pages_brokerages9_1'),
      title: i18n.t('pages_brokerages10'),
      features: [
        i18n.t('pages_brokerages10'),
        i18n.t('pages_brokerages11'),
        i18n.t('pages_brokerages12'),
        i18n.t('pages_brokerages13'),
        i18n.t('pages_brokerages14'),
        i18n.t('pages_brokerages15'),
      ],
      img: {
        'en': 'https://assets.lbkrs.com/uploads/16ba6734-159a-4cc1-8c31-1539a959660a/tab2_en.png',
        'zh-CN': 'https://assets.lbkrs.com/uploads/4457e1b5-ca0d-4462-bb2f-954ac7435854/tab2_cn.png',
        'zh-HK': 'https://assets.lbkrs.com/uploads/16c7189a-b9b2-4be2-a889-3e2f9881fe1f/tab2_hk.png',
      },
    },
    {
      tabTitle: i18n.t('pages_brokerages16'),
      title: i18n.t('pages_brokerages17'),
      key: '3',
      label: 'SaaS',
      features: [i18n.t('pages_brokerages18'), i18n.t('pages_brokerages19'), i18n.t('pages_brokerages20')],
      img: {
        'en': 'https://assets.lbkrs.com/uploads/3aa174da-a339-4db8-9add-a9270c67feef/tab3_en.png',
        'zh-CN': 'https://assets.lbkrs.com/uploads/a9d190cb-b7aa-4050-ade2-87ef02a06d44/tab3_cn.png',
        'zh-HK': 'https://assets.lbkrs.com/uploads/cef4d5ae-f17f-45d8-8601-2dd9203dacb3/tab3_hk.png',
      },
    },
  ]
  return (
    <div className={styles['tabs-wrapper']}>
      <Tabs
        items={tabs.map(tab => {
          const titleParagraphs = tab.title.split('<br />')

          return {
            label: tab.tabTitle,
            key: tab.key,
            children: (
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-xl text-brand_color mb-2">{tab.label}</div>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8">
                    <div className="hidden lg:block">
                      {titleParagraphs.map((item, index) => {
                        return (
                          <>
                            {item}
                            {index !== titleParagraphs.length - 1 && <br />}
                          </>
                        )
                      })}
                    </div>
                    <div className="lg:hidden">{tab.title.replaceAll('<br />', '')}</div>
                  </div>
                  <div>
                    <DotList list={tab.features} />
                  </div>
                </div>
                <div className="hidden lg:block flex-1 ml-20 xl:ml-[140px]">
                  <img
                    alt={tab.label}
                    src={
                      typeof tab.img === 'string' ? tab.img : tab.img[i18n.i18n.language as never] || tab.img['zh-CN']
                    }
                  />
                </div>
              </div>
            ),
          }
        })}
      ></Tabs>
    </div>
  )
}

export const BrokeragesCards = () => {
  const i18n = useTranslation('common')

  const cards = [
    {
      label: '30%',
      title: i18n.t('pages_brokerages24'),
      desc: i18n.t('pages_brokerages26'),
      icon: 'https://assets.lbkrs.com/uploads/9d4ae70b-785c-4f3d-a13d-12da76647b65/card_icon_1.png',
    },
    {
      label: '50%',
      title: i18n.t('pages_brokerages27'),
      desc: i18n.t('pages_brokerages29'),
      icon: 'https://assets.lbkrs.com/uploads/45edcb2d-436a-48e7-abbe-c46bfdcf4976/card_icon_2.png',
    },
    {
      label: '100+',
      title: i18n.t('pages_brokerages30'),
      desc: i18n.t('pages_brokerages32'),
      icon: 'https://assets.lbkrs.com/uploads/cbb946d4-6a40-4034-a5a7-099109d48cc7/card_icon_3.png',
    },
    {
      label: '60+',
      title: i18n.t('pages_brokerages33'),
      desc: i18n.t('pages_brokerages35'),
      icon: 'https://assets.lbkrs.com/uploads/aaf9664b-b81d-4867-a90a-95a6ce2ddd2e/card_icon_4.png',
    },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-9">
      {cards.map(card => {
        return (
          <div key={card.title} className="bg-white rounded-lg p-8 pr-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[60px] font-bold leading-[72px] text-brand_color">{card.label}</span>
              <img className="w-[72px]" src={card.icon} alt=""></img>
            </div>
            <div className="text-xl font-medium mb-2">{card.title}</div>
            <div className="text-text_color_1_supplement">{card.desc}</div>
          </div>
        )
      })}
    </div>
  )
}

export const BrokeragesProducts = () => {
  const i18n = useTranslation('common')

  const products = [
    {
      href: '',
      title: i18n.t('pages_brokerages44'),
      desc: i18n.t('pages_brokerages45'),
      icon: 'https://assets.lbkrs.com/uploads/36bd9d17-101e-486d-9d49-65bf0c7b29fe/product_icon_1.png',
    },
    {
      href: '',
      title: i18n.t('pages_brokerages46'),
      desc: i18n.t('pages_brokerages47'),
      icon: 'https://assets.lbkrs.com/uploads/99f5e51c-e95b-491f-898f-5f9d532974b2/product_icon_2.png',
    },
    {
      href: '',
      title: i18n.t('pages_brokerages48'),
      desc: i18n.t('pages_brokerages49'),
      icon: 'https://assets.lbkrs.com/uploads/70f0488f-ce43-430c-bb5d-8d267a2a1fa8/product_icon_3.png',
    },
    {
      href: '',
      title: i18n.t('pages_brokerages50'),
      desc: i18n.t('pages_brokerages51'),
      icon: 'https://assets.lbkrs.com/uploads/ef467b8a-ec44-4317-993a-adb054c352b4/product_icon_4.png',
    },
  ]

  return (
    <div>
      <Title title={i18n.i18n.t('pages_brokerages43')} />
      <div className="grid lg:grid-cols-2 gap-x-[120px] gap-y-9">
        {products.map((product, index) => {
          return (
            <Link href={product.href} key={product.title}>
              <div className={classNames('flex relative items-start p-8 pr-6 cursor-pointer')}>
                <div className="mr-6 p-4 bg-brand_color rounded-full">
                  <img className="w-9" src={product.icon} alt="" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-medium ">{product.title}</span>
                    <img
                      className="w-4"
                      src="https://assets.lbkrs.com/uploads/9d03a248-374a-4571-adbf-bca395be5da7/arrow_right.png"
                      alt="arrow"
                    />
                  </div>
                  <div className="text-base text-text_color_1_supplement">{product.desc}</div>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute h-px bg-border_color left-0 bottom-0 w-full"></div>
                )}
                {index < products.length - 1 && (
                  <div className="lg:hidden absolute h-px bg-border_color left-0 bottom-0 w-full"></div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const BrokeragesQuotes = () => {
  const i18n = useTranslation('common')
  const quotes = [
    {
      desc: i18n.t('pages_brokerages40'),
      name: i18n.t('pages_brokerages41'),
      position: i18n.t('pages_brokerages41_1'),
      enterprise: i18n.t('pages_brokerages42'),
    },
  ]

  return (
    <div className="text-white">
      <div className="text-center text-4xl mb-4 font-semibold">{i18n.t('pages_brokerages36')}</div>
      <div className="text-center text-xl mb-10 lg:mb-[60px]">{i18n.t('pages_brokerages37')}</div>
      <div className="flex items-start">
        <img
          className="w-9"
          src="https://assets.lbkrs.com/uploads/49e40771-a895-4676-9e6f-a6cadfc81ba9/quote_left.png"
          alt="left-quote"
        />
        {quotes.map(quote => {
          return (
            <div key={quote.name} className="text-base mx-8">
              <div>{quote.desc}</div>
              <div className="text-right">
                <span className="font-semibold">{quote.name}</span> <span>{quote.position}</span>
              </div>
              <div className="text-right">{quote.enterprise}</div>
            </div>
          )
        })}
        <img
          className="w-9"
          src="https://assets.lbkrs.com/uploads/d2cc5c37-0167-4c18-9b4b-72c7f49e6249/quote_right.png"
          alt="right-quote"
        />
      </div>
    </div>
  )
}

export const BrokeragesProductsTable = () => {
  const i18n = useTranslation('common')
  const products = [
    {
      label: i18n.t('pages_brokerages53'),
      list: [
        i18n.t('pages_brokerages54'),
        i18n.t('pages_brokerages55'),
        i18n.t('pages_brokerages56'),
        i18n.t('pages_brokerages57'),
      ],
    },
    {
      label: i18n.t('pages_brokerages58'),
      list: [
        i18n.t('pages_brokerages59'),
        i18n.t('pages_brokerages60'),
        i18n.t('pages_brokerages61'),
        i18n.t('pages_brokerages62'),
        i18n.t('pages_brokerages63'),
      ],
    },
    {
      label: i18n.t('pages_brokerages64'),
      list: [
        i18n.t('pages_brokerages65'),
        i18n.t('pages_brokerages66'),
        i18n.t('pages_brokerages67'),
        'PortAI',
        i18n.t('pages_brokerages69'),
        i18n.t('pages_brokerages70'),
        i18n.t('pages_brokerages71'),
        i18n.t('pages_brokerages72'),
      ],
    },
  ]

  return (
    <div>
      <Title title={i18n.t('pages_brokerages52')} />
      <div className="grid grid-cols-[auto_1fr] text-base gap-x-10 gap-y-8 lg:gap-x-[110px]">
        {products.map((product, index) => {
          return (
            <>
              <div className="font-medium">{product.label}:</div>
              <div
                className={classNames(
                  'relative flex-1 grid md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-x-4 gap-y-6',
                  {
                    'pb-8': index < products.length - 1,
                  }
                )}
              >
                {product.list.map(item => {
                  return (
                    <div key={item} className="flex">
                      <div className="w-1.5 h-1.5 bg-brand_color mr-4 mt-2"></div>
                      <div className="w-0 flex-1">{item}</div>
                    </div>
                  )
                })}
                {index < products.length - 1 && (
                  <div className="absolute h-px bg-border_color left-0 bottom-0 w-full"></div>
                )}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

import { Tabs } from 'antd'
import styles from './wealth-management.module.scss'
import DotList from '@/components/dot-list'
import { useTranslation } from 'react-i18next'

export const WealthManagementTabs = () => {
  const i18n = useTranslation('common')

  const tabs = [
    {
      tabTitle: i18n.t('pages_brokerages3'),
      key: '1',
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
          return {
            label: tab.tabTitle,
            key: tab.key,
            children: (
              <div className="md:flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8">
                    <div className="whitespace-pre-line">{tab.title}</div>
                  </div>
                  <div>
                    <DotList list={tab.features} />
                  </div>
                </div>
                <div className="flex-1 mt-10 md:mt-0 md:ml-20 xl:ml-[140px]">
                  <img
                    alt={tab.title}
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

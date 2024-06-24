import { Tabs } from 'antd'
import DotList from '@/components/dot-list'
import { useTranslation } from 'react-i18next'

const tabImg = [
  {
    'en': 'https://assets.lbkrs.com/uploads/be84ff7b-7d9d-4d25-8c8c-216b949a0b88/user_c_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/48737a97-32bd-4a99-83a3-065b93caa1fa/user_c_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/1cfe3fb0-c17e-41f5-a5e1-526c2df85b52/user_c_hk.png',
  },
  {
    'en': 'https://assets.lbkrs.com/uploads/62056ed9-ab9d-4b66-ba6f-290627f3afec/tab_2_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/96871090-485d-447a-8c0a-ba4b5d6002c1/tab_2_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/a60e12c7-61fb-4e64-8a63-30da8929a425/tab_2_hk.png',
  },
  {
    'en': 'https://assets.lbkrs.com/uploads/cd6cbe66-d21f-4bae-a847-1a34fadbc52e/tab3_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/f85896d6-a158-4d98-be36-3f35bf903ffa/tab3_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/140b936e-d5fa-4838-8862-384d07ccb6ca/tab3_hk.png',
  },
  {
    'en': 'https://assets.lbkrs.com/uploads/3ced3d83-9934-402d-8213-10a8ac166136/tab4_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/d35734da-3914-4db1-9c21-67090313bd14/tab4_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/f6954967-ae9f-4cd9-bd73-e65989d5ddba/tab4_hk.png',
  },
  {
    'en': 'https://assets.lbkrs.com/uploads/a0d274d6-b369-4acc-831b-52cf9213c3ba/tab5_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/ab5a6810-dcdc-41ec-bd9f-7ae703a7f008/tab5_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/9dd6659c-033e-4061-a407-838e4764b0b3/tab5_hk.png',
  },
  {
    'en': 'https://assets.lbkrs.com/uploads/fdaeadc8-6018-43fc-81ec-26b226a9b9c1/tab6_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/c2ffb072-0bd9-4d51-93bf-d7e02f4537e1/tab6_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/ada5fee9-18ab-41d8-a8c3-df96802caa75/tab6_hk.png',
  },
] as any[]

export const WealthManagementTabs = () => {
  const i18n = useTranslation('common')

  const tabs = [
    {
      tabTitle: i18n.t('pages_wm49'),
      title: i18n.t('pages_wm49'),
      desc: i18n.t('pages_wm50'),
      features: [
        i18n.t('pages_wm51'),
        i18n.t('pages_wm52'),
        i18n.t('pages_wm53'),
        i18n.t('pages_wm54'),
        i18n.t('pages_wm55'),
      ],
    },
    {
      tabTitle: i18n.t('pages_wm56'),
      title: i18n.t('pages_wm56'),
      desc: i18n.t('pages_wm57'),
      features: [i18n.t('pages_wm58'), i18n.t('pages_wm59'), i18n.t('pages_wm60'), i18n.t('pages_wm53')],
    },
    {
      tabTitle: i18n.t('pages_wm62'),
      title: i18n.t('pages_wm62'),
      desc: i18n.t('pages_wm63'),
      features: [i18n.t('pages_wm64'), i18n.t('pages_wm65'), i18n.t('pages_wm66'), i18n.t('pages_wm67')],
    },
    {
      tabTitle: i18n.t('pages_wm68'),
      title: i18n.t('pages_wm68'),
      desc: i18n.t('pages_wm69'),
      features: [
        i18n.t('pages_wm70'),
        i18n.t('pages_wm71'),
        i18n.t('pages_wm72'),
        i18n.t('pages_wm73'),
        i18n.t('pages_wm74'),
      ],
    },
    {
      tabTitle: i18n.t('pages_wm75'),
      title: i18n.t('pages_wm75'),
      desc: i18n.t('pages_wm76'),
      features: [
        <>
          <span className="font-medium">{i18n.t('pages_wm77')} </span>
          {i18n.t('pages_wm78')}
        </>,
      ],
    },
    {
      tabTitle: i18n.t('pages_wm79'),
      title: i18n.t('pages_wm79'),
    },
  ]
  return (
    <div className="cloud-tabs-wrapper">
      <Tabs
        items={tabs.map((tab, index) => {
          return {
            label: tab.tabTitle,
            key: tab.title,
            children: (
              <div className="md:flex justify-between items-center">
                {tab.features && (
                  <div className="flex-1">
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8">
                      <div className="whitespace-pre-line">{tab.title}</div>
                    </div>
                    <div>
                      {tab.features.length === 1 ? (
                        <div className="text-base">{tab.features}</div>
                      ) : (
                        <DotList list={tab.features} />
                      )}
                    </div>
                  </div>
                )}
                <div className="flex-1 mt-10 md:mt-0 md:ml-20 xl:ml-[140px]">
                  <img
                    alt={tab.title}
                    src={typeof tabImg[index] === 'string' ? tabImg[index] : tabImg[index][i18n.i18n.language as never]}
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

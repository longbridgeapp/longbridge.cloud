import BoxModule from '@/features/common/box-module'
import { useMemo } from 'react'
import { Divider } from 'antd'
import TextPictureSecondary from '@/features/common/text-picture-secondary'
import { useTranslation } from 'next-i18next'

const TradingDeskSystem = () => {
  const i18n = useTranslation('common')
  const sectionList01 = useMemo(() => {
    return [
      {
        img: 'https://pub.lbkrs.com/static/offline/202301/xt62YraKZZG8ypWA/Frame_427319006.svg',
        title: i18n.t('src_pages_atm_deposit_add_single_index_8659'),
        list: [
          i18n.t('src_pages_atm_deposit_add_single_index_8660'),
          i18n.t('src_pages_atm_deposit_add_single_index_8661'),
          i18n.t('src_pages_atm_deposit_add_single_index_8662'),
        ],
      },
      {
        img: 'https://pub.lbkrs.com/static/offline/202301/JMEzTGTMU93CW49z/Frame_427319008.svg',
        title: i18n.t('src_pages_atm_deposit_add_single_index_8663'),
        list: [
          i18n.t('src_pages_atm_deposit_add_single_index_8664'),
          i18n.t('src_pages_atm_deposit_add_single_index_8665'),
          i18n.t('src_pages_atm_deposit_add_single_index_8666'),
        ],
      },
    ]
  }, [])

  const sectionList02 = useMemo(() => {
    return {
      img: i18n.t('packages_xadmin_shared_config_menus_7695'),
      title: i18n.t('src_pages_atm_deposit_add_single_index_8667'),
      list: [
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/DJpxkYQF5MzQjqQ8/list.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8668'),
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/hhec68Xh6JMi6MHY/list_record.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8669'),
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/8r21WddwVCdKvW8n/market.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8670'),
        },
      ],
    }
  }, [])

  const sectionList03 = useMemo(() => {
    return {
      img: i18n.t('packages_xadmin_shared_config_menus_7696'),
      title: i18n.t('src_pages_atm_deposit_add_single_index_8671'),
      list: [
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/Ze5bxSCNooyh4UNS/feed.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8672'),
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/xgCrXorxFmhxM4Kv/keyboard.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8673'),
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/mys4LWQux88M2Krv/watchlist.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8674'),
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/ZAYUDeSYBek5GGNn/vote.svg',
          text: i18n.t('src_pages_atm_deposit_add_single_index_8675'),
        },
      ],
    }
  }, [])
  return (
    <BoxModule
      className="bg-[#F8F9FA]"
      label={i18n.t('src_pages_atm_deposit_add_single_index_8676')}
      title={i18n.t('src_pages_atm_deposit_add_single_index_8677')}
    >
      <>
        <div className="flex lg:space-x-10 flex-col lg:flex-row">
          {sectionList01.map((item: any, index) => {
            return (
              <div className="flex lg:block flex-col" key={index}>
                <img className="mb-5" src={item?.img} alt="" />
                <div className="space-y-4 lg:max-w-[498px]">
                  <div className="text-[28px] font-medium">{item?.title}</div>
                  {item?.list &&
                    item.list.map((itm: any, idx: number) => {
                      return (
                        <div className="dot-list text-base leading-6 text-text_color_1_supplement" key="idx">
                          {itm}
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>
        <Divider className="my-10" />
        <TextPictureSecondary item={sectionList02} />
        <Divider className="my-10" />
        <TextPictureSecondary className="flex-row-reverse" item={sectionList03} />
      </>
    </BoxModule>
  )
}
export default TradingDeskSystem

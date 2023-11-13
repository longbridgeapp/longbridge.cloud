import CardSwiper from '@/features/common/card-swiper'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const HomeSolutionSwiper = () => {
  const i18n = useTranslation('common')
  const dataSource = useMemo(() => {
    return [
      {
        contentInfo: {
          title: i18n.t('features_header_index_4'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('features_home_home_solution_swiper_891113')],
          img: {
            'en': 'https://assets.lbkrs.com/uploads/433cd5a0-1c29-485b-b0f5-83eeffa7826e/index-app-en.png',
            'zh-CN': 'https://assets.lbkrs.com/uploads/f39c82d2-7399-4cd8-8068-b32fe3995f16/index-app-cn.png',
            'zh-HK': 'https://assets.lbkrs.com/uploads/60a2d7b5-21df-4a30-9d4a-96649ee7afdb/index-app-hk.png',
          },
          localLink: '/solutions/app-plus',
        },
        footerList: [
          {
            title: 'White Label',
            text: i18n.t('features_home_home_solution_swiper_891114'),
            img: 'https://pub.lbkrs.com/files/202307/mfzkNAXKBe3hK388/White_Label.png',
          },
          {
            title: 'LongPort',
            text: i18n.t('features_home_home_solution_swiper_891115'),
            img: 'https://pub.lbkrs.com/files/202307/n196sKhL8ABvKu74/LongPort.png',
          },
          {
            title: i18n.t('features_home_home_solution_swiper_891116'),
            text: i18n.t('features_home_home_solution_swiper_891117'),
            img: 'https://pub.lbkrs.com/files/202307/UcnyYwjQNxRXR16y/service.png',
          },
          {
            title: i18n.t('features_home_home_solution_swiper_891118'),
            text: i18n.t('features_home_home_solution_swiper_891119'),
            img: 'https://pub.lbkrs.com/files/202307/w3HXUTzP8bWFWBWD/tools.png',
          },
        ],
      },
      {
        contentInfo: {
          title: i18n.t('pages_locale_solutions_securities_market_8769'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('features_home_home_solution_swiper_891152')],
          img: {
            'en': 'https://assets.lbkrs.com/uploads/e9516d56-9061-41af-8e5c-472ac3d542c0/counter-solution-en.png',
            'zh-CN': 'https://assets.lbkrs.com/uploads/dc64d811-35ef-4dbf-bc0d-5e63b1d0be1a/counter-solution-cn.png',
            'zh-HK': 'https://assets.lbkrs.com/uploads/9b132d84-4dc5-49f1-8026-53b461d4fdf7/counter-solution-hk.png',
          },
          localLink: '/solutions/securities-market',
        },
        footerList: [
          {
            title: i18n.t('features_home_home_solution_swiperx'),
            text: i18n.t('features_home_home_solution_swiper_891153'),
            img: 'https://pub.lbkrs.com/files/202307/vmLRv9aMdn1fR8dq/Group_627094.png',
          },
          {
            title: i18n.t('pages_locale_solutions_securities_market_8908'),
            text: i18n.t('features_home_home_solution_swiper_891154'),
            img: 'https://pub.lbkrs.com/files/202307/oK6qoyLPWpXtXBhi/Group_627429.png',
          },
          {
            title: i18n.t('pages_locale_solutions_securities_market_8910'),
            text: i18n.t('features_home_home_solution_swiper_891155'),
            img: 'https://pub.lbkrs.com/files/202307/W28YAhKckAz8S658/Group_627429-1.png',
          },
        ],
      },
      {
        contentInfo: {
          title: i18n.t('features_home_home_solution_swiper_891156'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('features_home_home_solution_swiper_891157')],
          img: {
            'en': 'https://assets.lbkrs.com/uploads/a968e994-5361-4f5f-a5d5-b530358a877c/index-vm-en.png',
            'zh-CN': 'https://assets.lbkrs.com/uploads/b708ac39-814b-422e-9dbe-28c2ea702b25/index-vm-cn.png',
            'zh-HK': 'https://assets.lbkrs.com/uploads/a7160398-c431-42e8-b122-edefb33a96e1/index-vm-hk.png',
          },
          localLink: '/solutions/virtual-assets',
        },
        footerList: [
          {
            title: i18n.t('pages_locale_solutions_virtual_assets_891115'),
            text: i18n.t('features_home_home_solution_swiper_891159'),
            img: ' https://pub.lbkrs.com/files/202307/KibYddqCGyi4gUJa/Group_627094.png',
          },
          {
            title: i18n.t('pages_locale_solutions_app_plus_8679'),
            text: i18n.t('features_home_home_solution_swiper_891160'),
            img: 'https://pub.lbkrs.com/files/202307/CF2qKVfm4bcWkDEM/Group_627429.png',
          },
          {
            title: i18n.t('features_home_home_solution_swiper_891161'),
            text: i18n.t('features_home_home_solution_swiper_891162'),
            img: 'https://pub.lbkrs.com/files/202307/VfQwHaBv7b2ct914/Group_627429-1.png',
          },
          {
            title: i18n.t('features_home_home_solution_swiper_891163'),
            text: i18n.t('features_home_home_solution_swiper_891164'),
            img: 'https://pub.lbkrs.com/files/202307/3gBW1LqA1eD3UyUW/Group_627096.png',
          },
        ],
      },
    ]
  }, [])
  return (
    <Box className="bg-bg_color_2">
      <>
        <Title label={i18n.t('whale-delivery-system-028')} title={i18n.t('pages_locale_index_891113')}></Title>
        <CardSwiper dataSource={dataSource} />
      </>
    </Box>
  )
}

export default HomeSolutionSwiper

import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const HomeCoreAdvantages = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        img: 'https://pub.pbkrs.com/files/202307/BiXGQ5mYG3aLnWpw/.png',
        title: i18n.t('features_home_home_core_advantages_891117'),
        desc: i18n.t('features_home_home_core_advantages_891118'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/oJpcMCaxHVG8FZrS/.png',
        title: i18n.t('features_home_home_core_advantages_891119'),
        desc: i18n.t('features_home_home_core_advantages_891120'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/oGhfiA6CudYn2QZR/.png',
        title: i18n.t('features_home_home_core_advantages_891121'),
        desc: i18n.t('features_home_home_core_advantages_891122'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/nHpWmeRrpFivnGR7/.png',
        title: i18n.t('features_home_home_core_advantages_891123'),
        desc: i18n.t('features_home_home_core_advantages_891124'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/KAwddhou1m3uveXL/_SaaS.png',
        title: i18n.t('features_home_home_core_advantages_891125'),
        desc: i18n.t('features_home_home_core_advantages_891126'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/t4KQ4o9csQDLbUDm/.png',
        title: i18n.t('features_home_home_core_advantages_891127'),
        desc: i18n.t('features_home_home_core_advantages_891128'),
      },
    ]
  }, [])

  return (
    // https://pub.pbkrs.com/files/202307/ZFxUXG2ty4kXW1mP/bg-image.png
    <Box
      className="bg-bg_color_2 bg-no-repeat bg-right-top bg-[length:717px_393px]"
      backgroundImage="https://pub.pbkrs.com/files/202307/zfP6yEtKhFSMFSdB/bg-image.png"
    >
      <>
        <Title
          label={i18n.t('features_home_home_core_advantages_891129')}
          title={i18n.t('features_home_home_core_advantages_891130')}
        ></Title>
        <div className="flex flex-wrap justify-between mt-2">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[100%] md:w-[44%] flex border-box pb-8 pt-8 border-b min-w-[340px]"
                style={
                  index === list.length - 1 || index == list.length - 2 ? { border: 'none', paddingBottom: 0 } : {}
                }
              >
                <img src={item.img} alt="" className="w-[48px] h-[48px] mr-[43px]" />
                <div className="grow">
                  <div className="text-xl font-medium">{item.title}</div>
                  <div className="text-text_color_1_supplement mt-3">{item.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </>
    </Box>
  )
}

export default HomeCoreAdvantages

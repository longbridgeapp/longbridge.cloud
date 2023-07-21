import Box from '@/features/product/Box'
import { ImageAndText } from '@/features/solutions/info-introduce'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const HomeCombination = () => {
  const i18n = useTranslation('common')
  const contentInfo = useMemo(() => {
    return {
      title: i18n.t('features_home_home_combination_891116'),
      desc: [i18n.t('features_home_home_combination_891114')],
      tips: i18n.t('features_home_home_combination_891115'),
      titleClassName: 'mb-3',
      img: {
        'en': 'https://pub.lbkrs.com/files/202307/z1Q7Gv88YABfTFwu/LEGO-EN.png',
        'zh-CN': 'https://pub.lbkrs.com/files/202307/CeotqCXRhXJFKtX5/LEGO-CN.png',
        'zh-HK': 'https://pub.lbkrs.com/files/202307/9VzeQvb8CXEvGk49/LEGO-HK.png',
      },
    }
  }, [])

  return (
    <Box>
      <ImageAndText {...contentInfo} />
    </Box>
  )
}

export default HomeCombination

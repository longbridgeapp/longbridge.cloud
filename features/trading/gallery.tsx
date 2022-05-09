import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './gallery.module.scss'

function useFeatures() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        desc: i18n.t(
          '从全球市场到行业，<br /> 到个股的投资标点发现旅程'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/7sTteg1TWPLZrVhw/Group_627308.png',
      },
      {
        desc: i18n.t(
          '全景模式，表态视图，供应链数据等，<br /> 让用户熟悉行业，了解个股，<br /> 在市场动态中把握机会。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/YXeYSVwAbX3EfwgS/Group_627309.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const TradingGallery = () => {
  const features = useFeatures()
  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        {features.map(feature => {
          return (
            <div className="feature-item" key={feature.desc}>
              <div className="feature-left">
                <img src={feature.picture} alt={feature.desc} />
              </div>
              <div className="feature-right">
                <p className="desc" dangerouslySetInnerHTML={{
                  __html: feature.desc,
                }}></p>
                <div className="mt-8">
                  <DivideDot size="medium" />
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

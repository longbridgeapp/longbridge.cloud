import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { PictureTextCard } from '../common/picture-text-card'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        desc: i18n.t('云原生、<br />微服务架构. '),
        picture: 'https://pub.lbkrs.com/files/202205/GwaswnCk3WSQSRDU/1.png',
      },
      {
        desc: i18n.t('多云、对接点的<br />行情灾备能力. '),
        picture: 'https://pub.lbkrs.com/files/202205/jY2uNADvyHuZHtoh/2.png',
      },
      {
        desc: i18n.t('自研高性能行情传输协议，<br />微秒级行情处理能力'),
        picture: 'https://pub.lbkrs.com/files/202205/kqQQxChD8MdMs8o1/3.png',
      },
      {
        desc: i18n.t('全内存行情数据存储方案，<br />微秒级的查询性能'),
        picture: 'https://pub.lbkrs.com/files/202205/kPYAnqDPJz1P6Kds/4.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const MarketFeatures = () => {
  const features = useFeatures()
  const i18n = useTranslation()

  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        <h2
          className="text-[40px] leading-[50px] font-normal"
          dangerouslySetInnerHTML={{
            __html: i18n.t('Market Data, <br />Fast Because Of The Cloud'),
          }}
        ></h2>
        <div className="flex justify-between mt-14">
          {features.map(feature => {
            return <PictureTextCard desc={feature.desc} picture={feature.picture} key={feature.desc} />
          })}
        </div>
      </div>
    </div>
  )
}
function useServices() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('行情数据服务'),
        desc: i18n.t(
          '提供包括美股、港股、新加坡股、A 股市场等各市场全面的行情，可通过 Open API、SDK、App 等多种方式接入。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/tBYE9zxz9wvojoHb/Vector.png',
      },
      {
        title: i18n.t('行情商店'),
        desc: i18n.t('满足用户对高级行情的需求，提供美国、香港、沪深、新加坡四大市场的实时行情数据及高级行情。'),
        picture: 'https://pub.lbkrs.com/files/202205/ipYi7bC7b9rkm6gR/Vector__1_.png',
      },
      {
        title: i18n.t('行情权限管理'),
        desc: i18n.t(
          '根据用户条件终端、市场、地区等对用户可使用的行情等级进行配置，并结合行情商店系统，满足交易所合规和用户行情的双重需求。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/hkk7u7VYvA1223Kt/Vector__2_.png',
      },
      {
        title: i18n.t('行情成本管理'),
        desc: i18n.t(
          '提供独立的行情成本管理系统管控需向交易所上缴的行情使用成本，并提供符合交易所格式的申报数据便于申报。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/3p1Qa4T8k3rLN6LL/Vector__3_.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
export const MarketServices = () => {
  const services = useServices()
  const i18n = useTranslation()

  return (
    <div className="main-container">
      <div className={classNames(styles.services, 'main-content-width')}>
        <h2
          className="text-section-title"
          dangerouslySetInnerHTML={{
            __html: i18n.t('Global Market, Global Service'),
          }}
        ></h2>
        <div className="flex justify-between items-center mt-14">
          <div className="flex-1">
            {services.map(service => {
              return (
                <div className="service-item" key={service.title}>
                  <div className="cover">
                    <img src={service.picture} alt={service.title} />
                  </div>
                  <div>
                    <h3 className="title">{service.title}</h3>
                    <p className="desc">{service.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex-1 ml-40">
            <img src="https://pub.lbkrs.com/files/202205/sZodMjdoZiq5MRif/Group_626641.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

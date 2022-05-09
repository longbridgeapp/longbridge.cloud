import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { FC, useMemo } from 'react'
import styles from './apps.module.scss'

const AppCard: FC<{
  name: string
  desc: string
  services: {
    name: string
    children?: string[]
  }[]
  className?: string
}> = ({ name, desc, services, className }) => {
  const i18n = useTranslation()

  return (
    <div className={classNames(styles.card, className)}>
      <div className="pb-10">
        <h3 className="name">{name}</h3>
        <DivideDot />
        <p className="desc">{desc}</p>
      </div>
      <div className="services">
        <span className="title">{i18n.t('提供服务')}</span>
        <ul className="service-list">
          {services.map(service => {
            return (
              <li key={service.name} className="service-item">
                <div className="flex items-center">
                  <div className="dot"></div>
                  {service.name}
                </div>
                {service.children && (
                  <ul className="sub-service-list">
                    {service.children.map(child => {
                      return (
                        <li className="sub-service-item" key={child}>
                          <div className="sub-dot"></div>
                          {child}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
function useApps() {
  const i18n = useTranslation()

  return useMemo(() => {
    return [
      {
        name: i18n.t('LONGPORT'),
        className: 'flex-1',
        desc: i18n.t('LONGPORT 是给 FD，OB/EP 客户提供的一款包括行情，资讯等完全免费的公版 App。'),
        services: [
          {
            name: i18n.t('美股、港股、美股期权，基金等实时行情'),
          },
          {
            name: i18n.t('美港股等全球经济相关资讯，并依据用户的持仓以及交易偏好提供相关资讯'),
          },
          {
            name: i18n.t('社区部分免费'),
          },
          {
            name: i18n.t('如果用户在多家 FD 券商客户开户，LONGPORT 提供子账户功能'),
          },
          {
            name: i18n.t('功能列表'),
            children: [
              i18n.t('关注 - 自选列表，股单，含股票基本面数据'),
              i18n.t('市场 - 主流市场行情指数动态'),
              i18n.t('市场 - 新股中心'),
              i18n.t('市场 - 基金交易模块'),
              i18n.t('动态 - 资讯与研报'),
              i18n.t('动态 - 直播与学堂'),
              i18n.t('动态 - 社区中心'),
              i18n.t('资产 - 客户资产、出入金、换汇、转仓、盈亏分析、交易中心、公司行动、结单、资金流水、交易记录等。'),
              i18n.t('我的 - 设置、帮助中心、客服、行情商城、费率中心、社区主页'),
            ]
          },
        ]
      },
      {
        name: i18n.t('White Label'),
        className: 'flex-1 brand-theme',
        desc: i18n.t('LONGPORT 是给 FD，OB/EP 客户提供的一款可定制的收费 App'),
        services: [
          {
            name: i18n.t('美港股等行情计费以及与数据源提供商结算服务'),
          },
          {
            name: i18n.t('基本面以及资讯的计费以及结算服务'),
          },
          {
            name: i18n.t('对于收费的功能项目，客户可以基于自己的需求来确定是否订阅'),
          },
          {
            name: i18n.t('定制部分，包括 logo，颜色，特殊需求可以与产品专家沟通。'),
          },
          {
            name: i18n.t('功能列表'),
            children: [
              i18n.t('关注 - 自选列表，股单，含股票基本面数据'),
              i18n.t('市场 - 主流市场行情指数动态'),
              i18n.t('市场 - 新股中心'),
              i18n.t('市场 - 基金交易模块'),
              i18n.t('动态 - 资讯与研报'),
              i18n.t('动态 - 直播与学堂'),
              i18n.t('动态 - 社区中心'),
              i18n.t('资产 - 客户资产、出入金、换汇、转仓、盈亏分析、交易中心、公司行动、结单、资金流水、交易记录等。'),
              i18n.t('我的 - 设置、帮助中心、智能线上客服、任务中心、活动中心、卡券管理，行情商城、费率中心、奖励记录、社区主页'),
            ]
          },
        ]
      }
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

}

export const SolutionApps = () => {
  const apps = useApps()

  return (
    <div className="py-[60px] main-container">
      <div className={classNames(styles.apps, 'main-content-width flex')}>
        {apps.map(({
          name,
          services,
          className,
          desc
          
        }) => {
          return (
            <AppCard
              key={name}
              className={className}
              name={name}
              services={services}
              desc={desc}
            />
          )
        })}
      </div>
    </div>
  )
}

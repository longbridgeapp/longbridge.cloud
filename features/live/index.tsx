import Header from '@/features/header'
import { LiveForm } from './form'
import { LiveVideo } from './video'
import styles from './live.module.scss'
import { useTranslation } from 'next-i18next'
import DivideDot from '@/components/divide-dot'
import { FC, useMemo } from 'react'

type IAgendaProps = {
  name: string
  sex: string
  position: string
  content: string
}
function useAgendas(): IAgendaProps[] {
  const i18n = useTranslation('common')

  return useMemo(() => {
    return [
      {
        name: i18n.t('胡国文'),
        sex: i18n.t('先生'),
        position: i18n.t('长桥科技代表'),
        content: i18n.t('开场致辞'),
      },
      {
        name: i18n.t('张玉婷'),
        sex: i18n.t('女士'),
        position: i18n.t('香港交易所'),
        content: i18n.t('不知道干啥'),
      },
      {
        name: '',
        sex: '',
        position: i18n.t('香港证券业协会 及 注册合规师公会代表'),
        content: i18n.t('致辞'),
      },
      {
        name: '',
        sex: '',
        position: i18n.t('Whale 产品展示及合作伙伴代表分享'),
        content: i18n.t('产品展示分享'),
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const Agenda: FC<IAgendaProps & {
  showLine: boolean
}> = ({ name, content, position, sex, showLine }) => {
  return (
    <>
      <div className="agenda-item flex flex-col justify-center items-center text-center">
        <div className="flex items-center justify-center h-[2em] text-2xl font-medium">
          <span>{content}</span>
          {showLine && <div className="flex-1 mx-4">
        <div className="border-black  w-full border-b-[1px] border-dashed"></div>
      </div>}
        </div>
        <div className="mt-5">
          {name && (
            <div>
              <span className="text-xl">{name}</span>
              <span className="text-base ml-2">{sex}</span>
            </div>
          )}
          <div className="position">{position}</div>
        </div>
      </div>
      
      
    </>
  )
}

const Detail = () => {
  const i18n = useTranslation('common')
  const agendas = useAgendas()
  return (
    <div className={styles.detail}>
      <div className="main-container">
        <div className="main-content-width">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-bold text-4xl">{i18n.t("数字券商 向云而生 Let's Go Cloud！")}</h3>
              <div className="mt-7">
                <DivideDot size="large" />
              </div>
              <div className="desc">
                <p>
                  {i18n.t(
                    '近年来，以云计算、大数据、人工智能、区块链等技术为代表的金融科技在证券领域的应用场景正不断拓展，金融科技和数字化或将成为证券行业下一个极速发展周期的核心驱动力。'
                  )}
                </p>
                <p>
                  {i18n.t(
                    '作为全球最活跃及流动性最高的证券市场之一，香港证券业亦正积极拥抱金融科技创新，加速数字化转型。'
                  )}
                </p>
                <p>
                  {i18n.t(
                    '长桥科技已于近日通过香港交易所认证，正式成为港交所经纪自设系统供应商（BSS Vendor）。同时，长桥 Whale 系统亦成功协助券商企业获得香港证监会电子数据储存供应商（Electronic Data Service Provider，EDSP）认证，现诚邀  阁下线上参与由长桥主办，邀请香港交易所、香港注册合规师工会、香港证券业协会及盈泰证券等代表嘉宾，与阁下共同见证数字化发展新时刻。'
                  )}
                </p>
              </div>
            </div>
            <div className="flex-1 ml-10">
              <img src="https://pub.lbkrs.com/files/202205/nRzqH899MYacvpDP/Group_627269.png" alt="" />
            </div>
          </div>
          <div className="mt-[60px]">
            <h4 className="font-medium text-2xl">{i18n.t('议程：')}</h4>
            <div className="agenda-list flex justify-between items-start mt-7">
              {agendas.map((item, index) => {
                return (
                  <Agenda showLine={index !== agendas.length - 1} {...item} key={item.content} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Live = () => {
  return (
    <div>
      <div className={styles.live}>
        <div className="section-content-container">
          <Header />
          <div className="main-container py-20">
            <div className="main-content-width">
              <div className="flex justify-between">
                <div className="flex-[2]">
                  <LiveVideo />
                </div>
                <div className="ml-7 flex-1">
                  <LiveForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Detail />
    </div>
  )
}

export default Live

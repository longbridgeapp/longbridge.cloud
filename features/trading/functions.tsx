import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './functions.module.scss'

function useSections() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        name: i18n.t('证券交易业务'),
        note: i18n.t('香港 1 号牌 '),
        functions: [
          {
            name: i18n.t('股票交易'),
            desc: i18n.t('美/港股，美股盘前/后'),
          },
          {
            name: i18n.t('订单类型'),
            desc: i18n.t('8 种，即将扩展到 10 种  '),
          },
          {
            name: i18n.t('期权交易'),
            desc: i18n.t('支持组合保证金 '),
          },
          {
            name: i18n.t('公募基金'),
            desc: i18n.t('数十支美元及港币基金'),
          },
          {
            name: i18n.t('私募基金'),
            desc: i18n.t('世界知管理人以及涵盖多个行业的股票私募基金'),
          },
          {
            name: i18n.t('机构账户'),
            desc: i18n.t('阶梯费率，API 交易'),
          },
          {
            name: i18n.t('IPO'),
            desc: i18n.t('标准港股新股认购，美股新股认购，港股国际配售'),
          },
        ],
      },
      {
        name: i18n.t('投资顾问业务'),
        note: i18n.t('香港 4 号牌  '),
        functions: [
          {
            name: i18n.t('投研'),
            desc: i18n.t('海豚投研'),
          },
          {
            name: i18n.t('股票评分'),
            desc: i18n.t('全景模式'),
          },
        ],
      },
      {
        name: i18n.t('程序化交易业务'),
        note: i18n.t('香港 4 号牌 '),
        functions: [
          {
            name: i18n.t('暗盘'),
            desc: i18n.t('TPS : 20000'),
          },
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
type IFunction = {
  name: string
  desc: string
}
const Section: FC<{
  name: string
  note: string
  functions: IFunction[]
}> = ({ note, name, functions }) => {
  return (
    <div className={styles.section}>
      <table>
        <colgroup>
          <col width="20%" />
          <col width="30%" />
          <col width="50%" />
        </colgroup>
        <tbody>
          {functions.map(({ name: functionName, desc }, index) => {
            return (
              <tr key={name}>
                {index === 0 && (
                  <td className="name-td" rowSpan={functions.length}>
                    <div className="flex flex-col items-center">
                      <span className="name">{name}</span>
                      <span className="note">{note}</span>
                    </div>
                  </td>
                )}
                <td className="function-name">{functionName}</td>
                <td className="function-desc">{desc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export const TradingFunctions = () => {
  const sections = useSections()
  const i18n = useTranslation()

  return (
    <div className={classNames(styles.functions, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <h3 className="text-section-title">{i18n.t('丰富的功能')}</h3>
        <div className="mt-[60px]">
          {sections.map(({ name, note, functions }) => {
            return <Section name={name} note={note} key={name} functions={functions} />
          })}
        </div>
      </div>
    </div>
  )
}

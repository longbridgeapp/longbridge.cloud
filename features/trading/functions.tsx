import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './functions.module.scss'

function useSections() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        name: i18n.t('trading_functions_001'),
        note: i18n.t('trading_functions_002'),
        functions: [
          {
            name: i18n.t('trading_functions_003'),
            desc: i18n.t('trading_functions_004'),
          },
          {
            name: i18n.t('trading_functions_005'),
            desc: i18n.t('trading_functions_006'),
          },
          {
            name: i18n.t('trading_functions_007'),
            desc: i18n.t('trading_functions_008'),
          },
          {
            name: i18n.t('trading_functions_009'),
            desc: i18n.t('trading_functions_010'),
          },
          {
            name: i18n.t('trading_functions_011'),
            desc: i18n.t('trading_functions_012'),
          },
          {
            name: i18n.t('trading_functions_013'),
            desc: i18n.t('trading_functions_014'),
          },
          {
            name: i18n.t('trading_functions_015'),
            desc: i18n.t('trading_functions_016'),
          },
        ],
      },
      {
        name: i18n.t('trading_functions_017'),
        note: i18n.t('trading_functions_018'),
        functions: [
          {
            name: i18n.t('trading_functions_019'),
            desc: i18n.t('trading_functions_020'),
          },
          {
            name: i18n.t('trading_functions_021'),
            desc: i18n.t('trading_functions_022'),
          },
        ],
      },
      {
        name: i18n.t('trading_functions_023'),
        note: i18n.t('trading_functions_018_1'),
        functions: [
          {
            name: i18n.t('trading_functions_024'),
            desc: i18n.t('trading_functions_025'),
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
  const i18n = useTranslation('common')

  return (
    <div className={classNames(styles.functions, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <h3 className="text-section-title">{i18n.t('trading_functions_026')}</h3>
        <div className="mt-[60px]">
          {sections.map(({ name, note, functions }) => {
            return <Section name={name} note={note} key={name} functions={functions} />
          })}
        </div>
      </div>
    </div>
  )
}

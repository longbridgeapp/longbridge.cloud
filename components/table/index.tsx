/**
 * 将统一行相互对比的项目进行排列
 * 同属一级的始终保持水平
 */
import React, { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

interface IBody {
  label: ReactNode
  value: ReactNode[][]
}
interface ITable {
  heads: { title?: ReactNode; subTitle?: ReactNode; light?: boolean }[]
  body: IBody[]
}

const Table: React.FC<{ data: ITable; className?: string; thColSpan?: number }> = props => {
  const { className, data, thColSpan = 2 } = props

  return (
    <div className={classnames(styles['table-wrapper'], className)}>
      <table className="w-full text-left border-t border-l border-border_color">
        <thead>
          <tr>
            <th colSpan={thColSpan} key={-1} className="bg-bg_table_1"></th>
            {data.heads.map((h, i) => (
              <th key={i} className={classnames('bg-bg_table_1', { light: h.light })}>
                <div className="title">{h.title}</div>
                <div className="subtitle">{h.subTitle}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.body.map((item, i) => {
            const trs = []
            trs.push(
              <tr className="row" key={i}>
                <td rowSpan={item.value?.length} className="text-base font-medium text-text_color_1" key="label">
                  {item.label}
                </td>
                {item.value[0]?.map((i_0, ii) => (
                  <td key={ii}>{i_0}</td>
                ))}
              </tr>
            )
            item.value.slice(1).map((i_more, i_more_index) => {
              trs.push(
                <tr className="row" key={`${i}-${i_more_index}`}>
                  {i_more?.map((i_0, ii) => (
                    <td key={ii}>{i_0}</td>
                  ))}
                </tr>
              )
            })
            return trs
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table

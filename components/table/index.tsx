/**
 * 将统一行相互对比的项目进行排列
 * 同属一级的始终保持水平
 */
import React, { ReactNode } from 'react'
import classnames from 'classnames'
import RightIcon from '@/components/right-icon'
import styles from './index.module.scss'

interface IBodyValue {
  children: ReactNode
  rowSpan?: number
}

interface IBody {
  label: ReactNode
  value: (IBodyValue | ReactNode)[][]
}
export interface ITable {
  heads: { title?: ReactNode; subTitle?: ReactNode; light?: boolean }[]
  body: IBody[]
  colRatio?: number[] // 每一行比例配置
  /** 隐藏之前第一列背景 */
  hideFirstBgTh?: boolean
}

const Table: React.FC<{ data: ITable; className?: string; thColSpan?: number }> = props => {
  const { className, data, thColSpan = 2 } = props

  return (
    <div className={classnames(styles['table-wrapper'], className)}>
      <table className="w-full text-left bg-white border-t border-l border-border_color">
        <thead className="sm:sticky sm:top-[67px]">
          <tr>
            {!data.hideFirstBgTh && <th colSpan={thColSpan} key={-1} className="bg-bg_table_1"></th>}
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
                <td
                  rowSpan={item.value?.length}
                  className="label text-base font-medium text-text_color_1"
                  key="label"
                  style={data.colRatio?.[0] ? { width: `${data.colRatio[0]}%` } : {}}
                >
                  {item.label}
                </td>
                {item.value[0]?.map((i_0, ii) => {
                  const children: ReactNode = (i_0 as IBodyValue).children ?? i_0
                  const rowSpan = (i_0 as IBodyValue).rowSpan
                  return (
                    rowSpan !== 0 && (
                      <td
                        className="!text-sm"
                        key={ii}
                        rowSpan={rowSpan}
                        style={data.colRatio?.[ii + 1] ? { width: `${data.colRatio[ii + 1]}%` } : {}}
                      >
                        {children === true ? (
                          <RightIcon key="icon" />
                        ) : children === false ? (
                          <span key="line-1" className="text-text_color_3_supplement">
                            －
                          </span>
                        ) : (
                          children
                        )}
                      </td>
                    )
                  )
                })}
              </tr>
            )
            item.value.slice(1).map((i_more, i_more_index) => {
              trs.push(
                <tr className="row" key={`${i}-${i_more_index}`}>
                  {i_more?.map((i_0, ii) => {
                    const children: ReactNode = (i_0 as IBodyValue).children || i_0
                    const rowSpan = (i_0 as IBodyValue).rowSpan
                    return (
                      rowSpan !== 0 && (
                        <td key={ii} className="!text-sm" rowSpan={rowSpan}>
                          {children === true ? (
                            <RightIcon key="icon" />
                          ) : children === false ? (
                            <span key="line-1" className="text-text_color_3_supplement">
                              －
                            </span>
                          ) : (
                            children
                          )}
                        </td>
                      )
                    )
                  })}
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

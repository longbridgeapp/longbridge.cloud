import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './index.module.scss'

export interface IDotListProps {
  list: ReactNode[]
  className?: string
  // 配置不同屏幕下的列数分配
  cols?: {
    lg?: number
    sm?: number
    xs?: number
  }
  dot?: ReactNode
}
export default function DotList({ list, className, cols, dot }: IDotListProps) {
  return (
    <ul
      className={classNames(className, 'text-base', styles['dot-list'])}
      style={{
        // @ts-ignore
        '--cols-lg': cols?.lg || 1,
        '--cols-sm': cols?.sm || 1,
        '--cols-xs': cols?.xs || 1,
      }}
    >
      {list.map((subItem, subIndex) => (
        <li className="list-item" key={subIndex}>
          {dot || <span className="dot"></span>}
          <span className="content">{subItem}</span>
        </li>
      ))}
    </ul>
  )
}

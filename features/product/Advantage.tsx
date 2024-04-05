import DotList from '@/components/dot-list'
import { FC } from 'react'

export interface IAdvantageProps {
  data: {
    title: string
    icon: string
    list: string[]
  }[]
}

const Advantage: FC<IAdvantageProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {data.map((item, index) => (
        <div key={index} className="flex">
          <img className="w-12 h-12 mr-5" src={item.icon} alt="" />
          <div className="flex-1">
            <div className="text-xl font-bold text-text_color_1 mb-5">{item.title}</div>
            <DotList list={item.list} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Advantage

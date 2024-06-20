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
export const HorizontalAdvantage: FC<IAdvantageProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
      {data.map((item, index) => (
        <div key={index} className="flex">
          <img className="w-12 h-12 mr-5" src={item.icon} alt="" />
          <div className="flex-1">
            <div className="text-xl font-semibold text-text_color_1 mb-3">{item.title}</div>
            <div className="space-y-4 md:flex md:space-x-10 md:space-y-0 en:block en:md:space-y-4 en:space-x-0">
              {item.list.map((text, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="w-0.5 h-0.5 translate-y-3 rounded-full bg-text_color_1_supplement mr-2"></div>
                    <div className="text-text_color_1_supplement text-base ">{text}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Advantage

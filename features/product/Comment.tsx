import classnames from 'classnames'
import React from 'react'

interface IComment {
  avatar: string
  name: string
  platform: string
  description: string
}
const Comment: React.FC<{ data: IComment[]; className?: string }> = ({ data, className }) => {
  return (
    <div className={classnames('flex flex-wrap justify-between gap-5', className)}>
      {data.map((c, i) => (
        <div className="p-5 bg-white w-full sm:min-w-[384px] sm:flex-1" key={i}>
          <div className="flex items-center gap-x-3">
            <img src={c.avatar} alt="avatar" className="w-10 h-10" />
            <div className="text-xs text-text_color_2">
              <div className="text-base text-text_color_1_supplement">{c.name}</div>
              {c.platform}
            </div>
          </div>
          <img
            src="https://assets.lbctrl.com/uploads/e0597802-dd9a-4917-bd23-5e79fbafef0b/quote.png"
            alt="quote"
            className="w-5 mt-5 mb-3"
          />
          <div className="text-base font-medium text-left text-text_color_1_supplement">{c.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Comment

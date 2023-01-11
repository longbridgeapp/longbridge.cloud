interface ITextPictureSecondary {
  className?: string
  item: { img: string; title: string; list: { img: string; text: string }[] }
}
const TextPictureSecondary = ({ item, className }: ITextPictureSecondary) => {
  return (
    <div className={`${className} flex items-center space-x-24`}>
      <img className="w-[588px]" src={item?.img} alt="" />
      <div className="">
        <div className="font-medium text-[28px] mb-10">{item?.title}</div>
        <div className="space-y-6">
          {item?.list &&
            item?.list.map((_itm, index) => {
              return (
                <div className="flex text-base text-text_color_1_supplement" key={index}>
                  <img src={_itm?.img} alt="" />
                  <div className="ml-8">{_itm?.text}</div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default TextPictureSecondary

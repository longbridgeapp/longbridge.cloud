interface ITextPictureSecondary {
  className?: string
  button?: JSX.Element
  item: { img: string; title: string; desc?: string; list: { img: string; text: string; imgStyle?: Object }[] }
}
const TextPictureSecondary = ({ item, className, button }: ITextPictureSecondary) => {
  return (
    <div className={`${className} flex items-center flex-col lg:flex-row justify-between `}>
      <img className="w-[588px]" src={item?.img} alt="" />
      <div className="">
        <div className="font-medium text-[28px] mb-10">
          {item?.title}
          {!!item.desc && <div className="mt-2 text-text_color_2 text-base font-normal">{item.desc}</div>}
        </div>
        <div className="space-y-6">
          {item?.list &&
            item?.list.map((_itm, index) => {
              return (
                <div className="flex text-base text-text_color_1_supplement items-center " key={index}>
                  <img src={_itm?.img} alt="" style={_itm.imgStyle ? _itm.imgStyle : {}}/>
                  <div className="ml-8">{_itm?.text}</div>
                </div>
              )
            })}
        </div>
        {button && <div>{button}</div>}
      </div>
    </div>
  )
}
export default TextPictureSecondary

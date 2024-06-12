import DotList from '@/components/dot-list'
import classNames from 'classnames'

export interface ITextPictureSecondary {
  className?: string
  button?: JSX.Element
  withDotList?: boolean
  descClassName?: string
  titleWrapperClassName?: string
  item: {
    img: string
    imgWidth?: number
    title?: string
    desc?: string
    list: { img?: string; text: string; imgStyle?: Object }[]
  }
}
const TextPictureSecondary = ({
  item,
  titleWrapperClassName,
  descClassName,
  withDotList,
  className,
  button,
}: ITextPictureSecondary) => {
  return (
    <div className={`${className} flex items-center flex-col lg:flex-row justify-between `}>
      <img
        style={{
          width: `${item.imgWidth ? item.imgWidth : '588'}px`,
        }}
        src={item?.img}
        alt=""
      />
      <div
        className={classNames({
          'flex-1 w-full lg:px-4': withDotList,
        })}
      >
        <div className={classNames('font-medium text-[28px] mb-10', titleWrapperClassName)}>
          <span
            className={classNames({
              'text-brand_color text-xl': withDotList,
            })}
          >
            <span>{item?.title}</span>
          </span>
          {!!item.desc && (
            <div
              className={classNames(
                'mt-2 text-text_color_2 text-base font-normal',
                {
                  ' text-4xl text-text-color-1 font-semibold': withDotList,
                },
                descClassName
              )}
            >
              {item.desc}
            </div>
          )}
        </div>
        {withDotList ? (
          <DotList className=" text-text_color_1_supplement" list={item.list.map(item => item.text)} />
        ) : (
          <div className="space-y-6">
            {item?.list &&
              item?.list.map((_itm, index) => {
                return (
                  <div className="flex text-base text-text_color_1_supplement items-center " key={index}>
                    <img src={_itm?.img} alt="" style={_itm.imgStyle ? _itm.imgStyle : {}} />
                    <div className="ml-8">{_itm?.text}</div>
                  </div>
                )
              })}
          </div>
        )}

        {button && <div>{button}</div>}
      </div>
    </div>
  )
}
export default TextPictureSecondary

import { FC, HTMLAttributes, useRef } from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { Carousel } from 'antd'
import { ImageAndText } from '@/features/solutions/info-introduce'
interface IProps {
  effect?: 'scrollx' | 'fade'
  autoplaySpeed?: number
  dataSource: {
    contentInfo: { title: string; desc: string[]; img: any }
    footerList?: { title: string; text: string; img: string }[]
  }[]
}

const Arrow: FC<
  {
    disabled: boolean
    isLeft: boolean
    onClick: () => void
  } & HTMLAttributes<HTMLDivElement>
> = ({ disabled, onClick, isLeft, ...res }) => {
  const onButtonClick = () => {
    if (disabled) {
      return
    }
    onClick()
  }

  return (
    <div
      className={classNames({
        'cursor-pointer absolute top-0 opacity-90 rounded-full w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[68px] md:h-[68px] lg:w-[68px] lg:h-[68px] flex justify-center items-center bg-white border-border_color border':
          true,
        'is-left rotate-180 2xl:left-[-155px] xl:left-[-105px] left-[0px]': isLeft,
        '2xl:right-[-155px] xl:right-[-105px] right-[0px]': !isLeft,
        'cursor-not-allowed text-disabled_color_1': disabled,
        'hover:bg-brand_color hover:text-[#ffffff]': !disabled,
      })}
      {...res}
      onClick={onButtonClick}
    >
      <Icon className="text-2xl" type="arrow-right" />
    </div>
  )
}

const CardSwiper = (props: IProps) => {
  const { dataSource = [], effect = 'scrollx', autoplaySpeed = 5000 } = props
  const CarouselRef = useRef(null)

  function CarouselNext() {
    const carouse = CarouselRef.current as unknown as { next: () => void }
    carouse?.next()
  }

  function CarouselPrev() {
    const carouse = CarouselRef.current as unknown as { prev: () => void }
    carouse?.prev()
  }

  return (
    <div className="relative">
      <Carousel
        className="card-swiper-section"
        autoplay
        effect={effect}
        dots={false}
        ref={CarouselRef}
        autoplaySpeed={autoplaySpeed}
      >
        {dataSource && !!dataSource.length
          ? dataSource.map((item, index) => {
              return (
                <div key={index}>
                  <ImageAndText {...item.contentInfo} needContact />
                  {!!item?.footerList?.length ? (
                    <>
                      <hr className="border-border_color" />
                      <div className="flex flex-wrap justify-between mt-10 gap-y-5">
                        {item.footerList.map((it, i) => {
                          return (
                            <div className="w-[100%] min-w-[250px] sm:w-[40%] md:w-[40%] lg:w-[19%]" key={i}>
                              <img src={it.img} alt="" className="h-[68px]" />
                              <div className="mt-6 mb-3 text-xl font-medium">{it.title}</div>
                              <div>{it.text}</div>
                            </div>
                          )
                        })}
                      </div>
                    </>
                  ) : null}
                </div>
              )
            })
          : null}
      </Carousel>
      <div className="buttons absolute z-[1] top-[133px] w-full">
        <Arrow isLeft disabled={false} onClick={CarouselPrev} />
        <Arrow isLeft={false} disabled={false} onClick={CarouselNext} />
      </div>
    </div>
  )
}

export default CardSwiper

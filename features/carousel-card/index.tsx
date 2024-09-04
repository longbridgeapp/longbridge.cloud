import { ReactElement, useRef } from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Box from '@/features/product/Box'
import styles from './index.module.scss'
import classNames from 'classnames'

export interface ICarouselCardProps {
  title: string
  list: ICarouselCard[]
  autoPlay?: boolean
  children?: ReactElement
}

export interface ICarouselCard {
  title: string
  desc: string
}

const CarouselCard = ({ title, list }: ICarouselCardProps) => {
  const CarouselRef = useRef(null)

  function CarouselNext() {
    const carousel = CarouselRef.current as unknown as { next: () => void }
    carousel.next()
  }

  function CarouselPrev() {
    const carousel = CarouselRef.current as unknown as { prev: () => void }
    carousel.prev()
  }

  return (
    <div className={classNames(styles['carousel-card'])}>
      <Box className="bg-brand_color">
        <div className="relative">
          <div className="title">{title}</div>
          <div className="btn-area">
            <button onClick={CarouselNext} className="btn next-btn">
              <RightOutlined />
            </button>
            <button onClick={CarouselPrev} className="btn pre-btn">
              <LeftOutlined />
            </button>
          </div>

          <Carousel autoplay effect="fade" className="white-slick" ref={CarouselRef}>
            {list.map((item, index) => (
              <div className="mb-20" key={index}>
                <h3 className="sub-title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Box>
    </div>
  )
}

export default CarouselCard

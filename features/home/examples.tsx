import Icon from '@/components/icon'
import { useResize } from '@/hooks/use-resize'
import { useMount, useUpdate, useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { FC, HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import styles from './examples.module.scss'

type IExampleFunctions = {
  app: string
  quotation: string
  system: string
  social: string
  news: string
}

function useExampleFunctionColumns() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('home_examples_001'),
        prop: 'app',
      },
      {
        title: i18n.t('home_examples_002'),
        prop: 'quotation',
      },
      {
        title: i18n.t('home_examples_003'),
        prop: 'system',
      },
      {
        title: i18n.t('home_examples_004'),
        prop: 'social',
      },
      {
        title: i18n.t('home_examples_005'),
        prop: 'news',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
type IExampleProps = {
  name: string
  logo: string
  descList: string[]
  cover: string
  functions: IExampleFunctions
}

const Example: FC<IExampleProps> = ({ name, logo, descList, cover, functions }) => {
  const columns = useExampleFunctionColumns()
  const [height, setHeight] = useState('auto')
  const [windowWidth] = useResize()
  const updateHeight = () => {
    setHeight(document.querySelector('.swiper-wrapper')?.clientHeight + 'px')
  }
  useUpdateEffect(() => {
    setHeight('auto')
    setTimeout(updateHeight, 100)
  }, [windowWidth])
  useMount(() => {
    setTimeout(updateHeight, 100)
  })

  return (
    <div
      className={styles.example}
      style={{
        height,
      }}
    >
      <div className="cover">
        {/* Safari 下直接使用 100% 会有样式问题 */}
        <img
          style={{
            height,
          }}
          src={cover}
          alt={name}
        />
      </div>
      <div className="main">
        <div className="logo">
          <img src={logo} alt={name} />
        </div>
        <h4 className="mt-4 text-2xl text-white">{name}</h4>
        <div>
          {descList.map(desc => {
            return (
              <p key={desc} className="desc">
                {desc}
              </p>
            )
          })}
        </div>
        <div className="functions">
          <table>
            <colgroup>
              <col width="60%"></col>
              <col width="40%"></col>
            </colgroup>
            <tbody>
              {columns.map(({ title, prop }) => {
                return (
                  <tr key={title}>
                    <td>{title}</td>
                    <td>{(functions as any)[prop]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const Arrow: FC<
  {
    disabled: boolean
    isLeft: boolean
  } & HTMLAttributes<HTMLDivElement>
> = ({ disabled, isLeft, ...res }) => {
  return (
    <div
      className={classNames(styles.arrow, {
        disabled,
        'is-left': isLeft,
      })}
      {...res}
    >
      <Icon className="text-2xl" type="arrow-right" />
    </div>
  )
}

const Controls = () => {
  const swiper = useSwiper()
  const total = swiper?.slides?.length || 0
  const activeIndex = swiper?.activeIndex || 0
  const update = useUpdate()
  const hasNext = activeIndex < total - 1
  const hasPrev = activeIndex > 0
  useEffect(() => {
    swiper.on('init', update)
    swiper.on('slideChangeTransitionEnd', update)
    swiper.on('breakpoint', update)
    setTimeout(update, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={styles.controls}>
      <div className="pagination">
        <div className="flex">
          {new Array(total).fill(0).map((_, index) => {
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={classNames('h-1 w-9 mr-3 last:mr-0 transition-all cursor-pointer', {
                  active: index === activeIndex,
                })}
                style={{
                  backgroundColor: index !== activeIndex ? 'var(--tag_border_color)' : 'var(--brand_color)',
                }}
                onClick={() => swiper.slideTo(index)}
              ></div>
            )
          })}
        </div>
      </div>
      <div className="buttons">
        {hasPrev ? <Arrow isLeft disabled={!hasPrev} onClick={() => swiper.slidePrev()} /> : <span></span>}
        {hasNext ? <Arrow isLeft={false} disabled={!hasNext} onClick={() => swiper.slideNext()} /> : <span></span>}
      </div>
    </div>
  )
}
function useExamples(): IExampleProps[] {
  const i18n = useTranslation('common')
  const free = i18n.t('home_examples_006')

  return useMemo(() => {
    const examples: IExampleProps[] = [
      {
        name: i18n.t('home_examples_009'),
        logo: 'https://pub.lbkrs.com/files/202205/NttAUryfw6TR8hDd/wintech_logo_.png',
        cover: 'https://pub.lbkrs.com/files/202205/zEN5oxy61TTKjneY/wintech.png',
        descList: [i18n.t('home_examples_007')],
        functions: {
          app: i18n.t('home_examples_008'),
          quotation: free,
          system: free,
          social: free,
          news: free,
        },
      },
      {
        name: i18n.t('home_examples_010'),
        logo: 'https://pub.lbkrs.com/files/202205/URxWFMb2Lev4Dhja/Group_626657.png',
        cover: 'https://pub.lbkrs.com/files/202205/iSBTzQxVyxtSFQqk/longbridge.png',
        descList: [i18n.t('home_examples_011'), i18n.t('home_examples_011_1'), i18n.t('home_examples_011_2')],
        functions: {
          app: i18n.t('home_examples_012'),
          quotation: i18n.t('home_examples_013'),
          system: i18n.t('home_examples_014'),
          social: free,
          news: free,
        },
      },
    ]

    return examples
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
const Examples = () => {
  const examples = useExamples()
  const containerRef = useRef<HTMLDivElement>(null)
  const [controls, setControls] = useState(null)
  useEffect(() => {
    setControls(createPortal(<Controls />, containerRef.current!) as any)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current])

  return (
    <div ref={containerRef} className="relative">
      <Swiper
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        spaceBetween={48}
        autoplay
        navigation
        className={styles['swipe-box-wrapper']}
      >
        {examples.map(example => {
          return (
            <SwiperSlide key={example.name}>
              <Example {...example} />
            </SwiperSlide>
          )
        })}
        {controls}
      </Swiper>
    </div>
  )
}

export const HomeExamples = () => {
  const i18n = useTranslation('common')

  return (
    <div className={styles.container}>
      <div>
        <div className="main-container !pr-0 pt-12">
          <div className="text-2xl label text-text_brand_color">{i18n.t('home_examples_015')}</div>
          <h3 className="mt-6 text-4xl font-normal">{i18n.t('home_examples_016')}</h3>
          <div className="mt-14">
            <Examples />
          </div>
        </div>
      </div>
    </div>
  )
}

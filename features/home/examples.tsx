import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FC, HTMLAttributes, useEffect, useMemo } from 'react'
import { useUpdate } from 'ahooks'
import classNames from 'classnames'
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
  desc: string
  cover: string
  functions: IExampleFunctions
}

const Example: FC<IExampleProps> = ({ name, logo, desc, cover, functions }) => {
  const columns = useExampleFunctionColumns()
  return (
    <div className={styles.example}>
      <div className="cover">
        <img src={cover} alt={name} />
      </div>
      <div className="main">
        <div className="logo">
          <img src={logo} alt={name} />
        </div>
        <h4 className="name">{name}</h4>
        <p className="desc">{desc}</p>
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
      <img
        className={classNames('', {
          hidden: !disabled,
        })}
        src="https://pub.lbkrs.com/files/202205/z8nDRutpB8ZrtAHz/Union__1_.png"
        alt=""
      />
      <img
        className={classNames('', {
          hidden: disabled,
        })}
        src="https://pub.lbkrs.com/files/202205/m9PDvy7BLG11UYfW/Union.png"
        alt=""
      />
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
      <Arrow isLeft disabled={!hasPrev} onClick={() => swiper.slidePrev()} />
      <div className="flex">
        {new Array(total).fill(0).map((_, index) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={classNames('h-1 w-9 mr-3 last:mr-0 transition-all', {
                active: index === activeIndex,
              })}
              style={{
                backgroundColor: index !== activeIndex ? 'var(--tag_border_color)' : 'var(--brand_color)',
              }}
            ></div>
          )
        })}
      </div>
      <Arrow isLeft={false} disabled={!hasNext} onClick={() => swiper.slideNext()} />
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
        logo: 'https://pub.lbkrs.com/files/202205/EnwcZZWuQFUSdprB/Group_626657__1_.png',
        cover: 'https://pub.lbkrs.com/files/202205/WVGhGV7smuP81kK8/charles-deluvio-Lks7vei-eAg-unsplash_2.png',
        desc: i18n.t('home_examples_007'),
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
        cover: 'https://pub.lbkrs.com/files/202205/1qojMBP3AxMRdTNr/Rectangle.png',
        desc: i18n.t('home_examples_011'),
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
  return (
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
      <Controls />
    </Swiper>
  )
}

export const HomeExamples = () => {
  const i18n = useTranslation('common')

  return (
    <div className={styles.container}>
      <div className="section-content-container">
        <div className="main-container !pr-0">
          <div>
            <span className="label text-text_brand_color text-2xl">{i18n.t('home_examples_015')}</span>
            <h3 className="font-normal text-[40px] mt-6">{i18n.t('home_examples_016')}</h3>
            <div className="mt-[60px]">
              <Examples />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

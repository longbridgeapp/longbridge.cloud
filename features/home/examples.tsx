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
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('APP'),
        prop: 'app',
      },
      {
        title: i18n.t('美港股实时行情'),
        prop: 'quotation',
      },
      {
        title: i18n.t('系统'),
        prop: 'system',
      },
      {
        title: i18n.t('社区'),
        prop: 'social',
      },
      {
        title: i18n.t('资讯'),
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
  const i18n = useTranslation()
  const free = i18n.t('Free')

  return useMemo(() => {
    const examples: IExampleProps[] = [
      {
        name: 'WINTECH SECURITIES LTD. ',
        logo: 'https://pub.lbkrs.com/files/202205/EnwcZZWuQFUSdprB/Group_626657__1_.png',
        cover: 'https://pub.lbkrs.com/files/202205/WVGhGV7smuP81kK8/charles-deluvio-Lks7vei-eAg-unsplash_2.png',
        desc: i18n.t(
          '盈泰在与 WHALE 合作之前，需要负担高额的本地机房维护费用，系统费用。没有 App，没有资讯，没有实时行情等，由于产品体验不好，只能通过经纪人电话下单，用户不断流失，一直处于亏损状态；与 WHALE 合作后，用户可以通过 App 实时看行情、资产、可以通过资讯，社区了解更多的投资信息，DARTs 也屡获新高。不仅用户留存率大大提高，同时获得了大量的新增用户。'
        ),
        functions: {
          app: i18n.t('Longport  App Free'),
          quotation: free,
          system: free,
          social: free,
          news: free,
        },
      },
      {
        name: 'LONBRIDGE.',
        logo: 'https://pub.lbkrs.com/files/202205/URxWFMb2Lev4Dhja/Group_626657.png',
        cover: 'https://pub.lbkrs.com/files/202205/1qojMBP3AxMRdTNr/Rectangle.png',
        desc: i18n.t(
          'LONGBRIDGE 是 WHALE 全能力的展示，通过 WHALE 定制化的 APP，提供了“发现 - 认知 - 交易”完整的用户旅程；其中行业内独特的供应链数据让用户快速了解行业上下游，全面的判断股票的投资潜力；“全景模式”更是让普通用户能够容易地读懂基本面信息，而不用费解的去研究什么是市净率，市盈率等生涩的金融词汇；LONGBRDGE 通过 WHALE 提供的邀请，拼团，秒杀等获客工具 2021 Q4 在香港本地获得的 2.5 万的有资产用户，5 万开户用户，10 万注册用户。通过股票卡，免佣卡，等运营工具实现了 60 天有资产用户 50% 的交易转化率。'
        ),
        functions: {
          app: i18n.t('定制化 App'),
          quotation: i18n.t('订阅收费'),
          system: i18n.t('2 港币/用户'),
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
  const i18n = useTranslation()

  return (
    <div className={styles.container}>
      <div className="section-content-container">
        <div className="main-container !pr-0">
          <div>
            <span className="label text-text_brand_color text-2xl">{i18n.t('Best Practice')}</span>
            <h3 className="font-normal text-[40px] mt-6">{i18n.t('They all chose LONGBRIDGE WHALE')}</h3>
            <div className="mt-[60px]">
              <Examples />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

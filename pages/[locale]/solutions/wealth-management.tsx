import React, { useMemo } from 'react'
import classNames from 'classnames'
import { TalkToUs, ContactUs, ContactUsBlack } from '@/features/talk-to-us'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import Banner from '@/features/product/Banner'
import { ImageAndText } from '@/features/solutions/info-introduce'
import Table from '@/components/table'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import TextPictureSecondary, { ITextPictureSecondary } from '@/features/common/text-picture-secondary'
import PictureTextBorderCard from '@/features/common/picture-text-bordercard'
import { SolutionBanner } from '@/features/solutions/brokerages'
import { Combine, ProductsTable } from '@/features/solutions/combine'
import { HorizontalAdvantage, IAdvantageProps } from '@/features/product/Advantage'
import DotList from '@/components/dot-list'
import { WealthManagementTabs } from '@/features/solutions/wealth-management'
import Carousel from 'antd/lib/carousel'
import { useCarouserAutoHeight } from '@/hooks/use-resize'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    // @ts-ignore
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const tradeServiceImgMap = {
  chains: {
    'zh-CN': 'https://assets.lbkrs.com/uploads/0c9a823d-ddf9-4126-927f-3f75ff7f7284/chains_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/670dff11-0929-4585-8710-4540cfc5fe7b/chains_hk.png',
    'en': 'https://assets.lbkrs.com/uploads/41c009e5-c25c-47b4-b7f0-f449b9a3db68/chains_en.png',
  } as Record<string, string>,
  chart: {
    'zh-CN': 'https://assets.lbkrs.com/uploads/6985b0eb-370a-4407-aa99-8d901f3fa692/chart_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/bb42eb5c-a6d3-4ea9-9d64-9282c5cf894b/chart_hk.png',
    'en': 'https://assets.lbkrs.com/uploads/3589a769-1f7a-47a0-ad91-ed98ad38ed35/chart_en.png',
  } as Record<string, string>,
}

function SolutionList({ list }: { list: string[] }) {
  return (
    <div>
      {list.map(item => {
        return (
          <div className="flex text-base leading-7 " key={item}>
            <div className="w-0.5 h-0.5 translate-y-3 rounded-full bg-text_color_1_supplement mr-2"></div>
            <div>{item}</div>
          </div>
        )
      })}
    </div>
  )
}

const WealthManagement = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const solutions = [
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm6'),
      problems: [i18n.t('pages_wm7'), i18n.t('pages_wm8'), i18n.t('pages_wm9'), i18n.t('pages_wm10')],
      solutions: [i18n.t('pages_wm12'), i18n.t('pages_wm13'), i18n.t('pages_wm14')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm15'),
      problems: [i18n.t('pages_wm16'), i18n.t('pages_wm17')],
      solutions: [i18n.t('pages_wm19'), i18n.t('pages_wm20'), i18n.t('pages_wm21')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm22'),
      problems: [i18n.t('pages_wm23'), i18n.t('pages_wm24'), i18n.t('pages_wm25')],
      solutions: [i18n.t('pages_wm27'), i18n.t('pages_wm28'), i18n.t('pages_wm29')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm30'),
      problems: [i18n.t('pages_wm31'), i18n.t('pages_wm32'), i18n.t('pages_wm33')],
      solutions: [i18n.t('pages_wm35'), i18n.t('pages_wm36')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm37'),
      problems: [i18n.t('pages_wm38')],
      solutions: [i18n.t('pages_wm40'), i18n.t('pages_wm41'), i18n.t('pages_wm42')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_wm43'),
      problems: [i18n.t('pages_wm44'), i18n.t('pages_wm45')],
      solutions: [i18n.t('pages_wm47')],
    },
  ]
  const { containerRef, height } = useCarouserAutoHeight()
  const getSolutionsNode = (inCarousel = false) => {
    return solutions.map(solution => {
      return (
        <div key={solution.title} className="rounded-lg  bg-front-bg-color-1">
          <div
            className=" p-8"
            style={{
              height: inCarousel ? height : undefined,
            }}
          >
            <img src={solution.icon} className="w-10 h-10 mb-4" alt="" />
            <div className="whitespace-pre-line font-medium text-xl mb-2">{solution.title}</div>
            <SolutionList list={solution.problems} />
            <div className="text-brand_color text-base leading-7 font-medium mt-4">{i18n.t('pages_wm11')}</div>
            <SolutionList list={solution.solutions} />
          </div>
        </div>
      )
    })
  }
  const list2 = [i18n.t('pages_wm156'), i18n.t('pages_wm157'), i18n.t('pages_wm158')]

  return (
    <Layout>
      <SEOMeta title={i18n.t('pages_wm0_2')} description={seoI18n.t('us-stock.description')} />
      <div>
        <SolutionBanner
          label={i18n.t('pages_wm0')}
          title={i18n.t('pages_wm0_1')}
          secondLineTitle=""
          desc={i18n.t('pages_wm1')}
        />
        <Box className="lg:py-20 ">
          <div className="lg:flex justify-between items-center">
            <div className="mb-10 lg:mb-0 lg:flex-1 whitespace-pre-line">
              <Title className="mb-5" title={i18n.t('pages_wm2')} desc={i18n.t('pages_wm3')} />
              <div className="text-xs text-text_color_2">* {i18n.t('pages_wm4')}</div>
            </div>
            <div className="lg:flex-1 lg:ml-10">
              <img alt="" src={tradeServiceImgMap.chart[i18n.i18n.language]} />
            </div>
          </div>
        </Box>

        <Box className="lg:py-20 bg-bg_color_2">
          <>
            <Title className="mb-10" title={i18n.t('pages_wm5')} />
            <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-7">{getSolutionsNode()}</div>
            <div ref={containerRef}>
              <Carousel className="md:!hidden" autoplay={true} autoplaySpeed={5000} effect="fade">
                {getSolutionsNode(true)}
              </Carousel>
            </div>
          </>
        </Box>
        <Box className="lg:py-20">
          <>
            <WealthManagementTabs />
          </>
        </Box>
        <hr className="border-border_color" />
        <Box className="lg:py-20">
          <>
            <Title className="mb-10" title={i18n.t('pages_wm80')} />
            <img alt="" src={tradeServiceImgMap.chains[i18n.i18n.language]} />
            <DotList className={classNames('lg-with-flex lg:space-x-12 mt-10 lg:en:space-x-4')} list={list2} />
          </>
        </Box>
        <Box className="bg-bg_color_2 lg:py-20">
          <ProductsTable />
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}
export default WealthManagement

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
    'en': 'https://assets.lbkrs.com/uploads/9a32a46b-d8ce-40d8-bcf6-112deaaafbe3/chains_en.png',
  } as Record<string, string>,
  chart: {
    'zh-CN': 'https://assets.lbkrs.com/uploads/6985b0eb-370a-4407-aa99-8d901f3fa692/chart_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/bb42eb5c-a6d3-4ea9-9d64-9282c5cf894b/chart_hk.png',
    'en': 'https://assets.lbkrs.com/uploads/1553baed-03be-474f-99ce-014babd03727/chart_en.png',
  } as Record<string, string>,
}

function SolutionList({ list }: { list: string[] }) {
  return (
    <div>
      {list.map(item => {
        return (
          <div className="flex text-base leading-7 " key={item}>
            <div className="w-0.5 h-0.5 translate-y-3 rounded-full bg-text_color_1_supplement mr-2 flex-shrink-0"></div>
            <div className="w-0 flex-1 text-text_color_1_supplement">{item}</div>
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
      icon: 'https://assets.lbkrs.com/uploads/d6c30b54-fa8b-423c-923e-6365e762a3c0/icon1.png',
      title: i18n.t('pages_wm6'),
      problems: [i18n.t('pages_wm7'), i18n.t('pages_wm8'), i18n.t('pages_wm9'), i18n.t('pages_wm10')],
      solutions: [i18n.t('pages_wm12'), i18n.t('pages_wm13'), i18n.t('pages_wm14')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/946462be-42e8-4643-8432-4b3e2e76513c/icon2.png',
      title: i18n.t('pages_wm15'),
      problems: [i18n.t('pages_wm16'), i18n.t('pages_wm17')],
      solutions: [i18n.t('pages_wm19'), i18n.t('pages_wm20'), i18n.t('pages_wm21')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/51b979b6-f3b1-40a6-9dce-89095838497c/icon3.png',
      title: i18n.t('pages_wm22'),
      problems: [i18n.t('pages_wm23'), i18n.t('pages_wm24'), i18n.t('pages_wm25')],
      solutions: [i18n.t('pages_wm27'), i18n.t('pages_wm28'), i18n.t('pages_wm29')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/de848b51-bcaa-454e-a0ad-78bb6e3c40ba/icon4.png',
      title: i18n.t('pages_wm30'),
      problems: [i18n.t('pages_wm31'), i18n.t('pages_wm32'), i18n.t('pages_wm33')],
      solutions: [i18n.t('pages_wm35'), i18n.t('pages_wm36')],
    },
    // {
    //   icon: 'https://assets.lbkrs.com/uploads/acc62b79-5109-4a2f-9c8a-b559affc3a4a/icon5.png',
    //   title: i18n.t('pages_wm37'),
    //   problems: [i18n.t('pages_wm38')],
    //   solutions: [i18n.t('pages_wm40'), i18n.t('pages_wm41'), i18n.t('pages_wm42')],
    // },
    // {
    //   icon: 'https://assets.lbkrs.com/uploads/de848b51-bcaa-454e-a0ad-78bb6e3c40ba/icon4.png',
    //   title: i18n.t('pages_wm43'),
    //   problems: [i18n.t('pages_wm44'), i18n.t('pages_wm45')],
    //   solutions: [i18n.t('pages_wm47')],
    // },
  ]
  const { containerRef, height } = useCarouserAutoHeight()
  const getSolutionsNode = (inCarousel = false) => {
    return solutions.map(solution => {
      return (
        <div key={solution.title} className="rounded-lg  bg-front-bg-color-1">
          <div
            className="flex p-8"
            style={{
              height: inCarousel ? height : undefined,
            }}
          >
            <img src={solution.icon} className="w-10 h-10 mb-4 mr-6 flex-shrink-0" alt="" />
            <div className="flex-1">
              <div className="whitespace-pre-line font-medium text-xl mb-2">{solution.title}</div>
              <SolutionList list={solution.problems} />
              <div className="text-brand_color text-base leading-7 font-medium mt-4">{i18n.t('pages_wm11')}</div>
              <SolutionList list={solution.solutions} />
            </div>
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
            <div className="hidden md:grid md:grid-cols-2 gap-7">{getSolutionsNode()}</div>
            <div ref={containerRef}>
              <Carousel className="md:!hidden" autoplay={true} autoplaySpeed={5000} effect="fade">
                {getSolutionsNode(true)}
              </Carousel>
            </div>
          </>
        </Box>
        <Box className="lg:py-20">
          <>
            <Title className="mb-10" title={i18n.t('pages_wm48')} />
            <WealthManagementTabs />
            <hr className="border-border_color my-10 lg:my-20" />
            <Title className="mb-10" title={i18n.t('pages_wm80')} />
            <img alt="" src={tradeServiceImgMap.chains[i18n.i18n.language]} />
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

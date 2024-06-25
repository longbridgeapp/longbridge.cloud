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

const tradeServiceImgMap: any = {
  architecture: {
    'en': 'https://assets.lbkrs.com/uploads/eb4b6cb3-4f35-4d75-9c48-b246b2785d15/architecture_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/a73b7d34-7661-4bd4-a848-521198c56003/us_stock_architecture_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/c3141781-ae69-44a7-89f5-732df94b9993/us_stock_architecture_hk.png',
  },
  backend: {
    'en': 'https://assets.lbkrs.com/uploads/f45ba9d3-ef22-4d24-bf02-b7c978c00bd1/backend_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/4c9c9e5c-9ca4-459b-8592-41a1a0d6b5ee/backend_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/6a5861b2-ba8d-4502-bd60-8b1434acaf9c/backend_hk.png',
  },
  trading_desk: {
    'en': 'https://assets.lbkrs.com/uploads/248eb5c7-5374-429c-9bc2-66a47195725b/trading_desk_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/1b2a0b29-5300-4082-8462-773b558af5a2/trading_desk_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/f8826e4e-017c-4c61-aa6b-9175d6e6c89a/trading_desk_hk.png',
  },
  overnight: {
    'en': 'https://assets.lbkrs.com/uploads/bd0202aa-c2a4-4da5-8fd0-5bfe40a636cb/overnight_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/c64bce15-2fc1-4836-9887-57dc33c19cdd/overnight_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/7499de51-5b5a-4c9a-9408-1a680cc3bfa5/overnight_hk.png',
  },
  order: {
    'en': 'https://assets.lbkrs.com/uploads/ceb62ae2-9a3c-448d-990d-6f62e2f8439c/order_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/b49bf46b-caff-430b-bbbe-bfb1819ba0e3/order_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/71fc258c-27c1-45b1-9ca6-48669cf4484f/order_hk.png',
  },
  option: {
    'en': 'https://assets.lbkrs.com/uploads/779a2d32-f295-4e6f-9da5-5a2119982a85/option_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/db35a190-9056-440d-8911-64de06d5d0e7/option_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/6269ff77-18d8-435e-977b-5305eff40d2a/option_hk.png',
  },
}

const UsStock = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const advantages: IAdvantageProps['data'] = [
    {
      icon: 'https://assets.lbkrs.com/uploads/90fb4d46-a837-476d-a1ab-0ad641bee500/solution_us_stock_advantage_1.png',
      title: i18n.t('pages_us_stock4'),
      list: [i18n.t('pages_us_stock5'), i18n.t('pages_us_stock6')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/e10e3eda-7327-47c0-82af-d7675fab8290/icon_3_gray.png',
      title: i18n.t('pages_us_stock7'),
      list: [i18n.t('pages_us_stock8'), i18n.t('pages_us_stock9'), i18n.t('trading_functions_007')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/6fd446d2-5beb-4c4f-be40-6e25bf773589/solution_us_stock_advantage_3.png',
      title: i18n.t('pages_us_stock11'),
      list: [i18n.t('pages_us_stock12'), i18n.t('pages_us_stock13')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/957a3767-9b92-41ac-acf2-97bc5080be0b/solution_us_stock_advantage_4.png',
      title: i18n.t('pages_us_stock14'),
      list: [i18n.t('pages_us_stock15'), i18n.t('pages_us_stock16')],
    },
  ]
  const solutions = [
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_us_stock19'),
      desc: i18n.t('pages_us_stock20'),
      list: [i18n.t('pages_us_stock21'), i18n.t('pages_us_stock22'), i18n.t('pages_us_stock23')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/af0047cc-f5e3-43bd-8c6e-8853c2c4b9d9/solution_us_stock_advantage_6.png',
      title: i18n.t('pages_us_stock24'),
      desc: i18n.t('pages_us_stock25'),
      list: [i18n.t('pages_us_stock26'), i18n.t('pages_us_stock27'), i18n.t('pages_us_stock28')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/95d6d61d-bf0f-4bc0-adcd-183ef1f053f0/icon_2.png',
      title: i18n.t('pages_us_stock29'),
      desc: i18n.t('pages_us_stock30'),
      list: [i18n.t('pages_us_stock31'), i18n.t('pages_us_stock32'), i18n.t('pages_us_stock33')],
    },
  ]
  const tradeServiceList = [
    {
      img: 'https://assets.lbkrs.com/uploads/974fd067-5e4a-497d-b4bd-c85ef3b118f0/stock.png',
      desc: i18n.t('pages_us_stock37'),
      button: undefined,
      imgWidth: 530,
      className: '',
      list: [
        {
          text: i18n.t('pages_us_stock38'),
        },
        {
          text: i18n.t('pages_us_stock39'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.order[i18n.i18n.language],
      desc: i18n.t('pages_us_stock40'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('pages_us_stock41'),
        },
        {
          text: i18n.t('pages_us_stock42'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.option[i18n.i18n.language],
      desc: i18n.t('pages_locale_solutions_securities_market_8791'),
      button: undefined,
      imgWidth: 530,
      list: [
        {
          text: i18n.t('pages_us_stock44'),
        },
        {
          text: i18n.t('pages_us_stock45'),
        },
        {
          text: i18n.t('pages_us_stock46'),
        },
        {
          text: i18n.t('pages_us_stock47'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.overnight[i18n.i18n.language],
      desc: i18n.t('pages_us_stock48'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('pages_us_stock49'),
        },
        {
          text: i18n.t('pages_us_stock50'),
        },
        {
          text: i18n.t('pages_us_stock51'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.trading_desk[i18n.i18n.language],
      desc: i18n.t('pages_us_stock52'),
      button: undefined,
      imgWidth: 530,
      list: [
        {
          text: i18n.t('pages_us_stock53'),
        },
        {
          text: i18n.t('pages_us_stock54'),
        },
        {
          text: i18n.t('pages_us_stock55'),
        },
        {
          text: i18n.t('pages_us_stock56'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.backend[i18n.i18n.language],
      desc: i18n.t('pages_us_stock57'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('whale-backoffice-024'),
        },
        {
          text: i18n.t('pages_us_stock59'),
        },
        {
          text: i18n.t('pages_us_stock60'),
        },
      ],
    },
  ]

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('us-stock.title')} description={seoI18n.t('us-stock.description')} />
      <div>
        <SolutionBanner
          label={i18n.t('pages_us_stock0')}
          title={i18n.t('pages_us_stock1')}
          secondLineTitle=""
          desc={i18n.t('pages_us_stock2')}
        />
        <Box className="lg:py-20">
          <>
            <Title className="mb-10" title={i18n.t('pages_us_stock3')} />
            <HorizontalAdvantage data={advantages} />
          </>
        </Box>

        <Box className="lg:py-20 bg-bg_color_2">
          <>
            <Title className="mb-6" label={i18n.t('pages_us_stock18')} title={i18n.t('pages_us_stock17')} />
            <div className="grid lg:grid-cols-3 gap-6">
              {solutions.map(solution => {
                return (
                  <div key={solution.title} className=" rounded-lg p-8 bg-front-bg-color-1 ">
                    <img src={solution.icon} className="w-[52px] h-[52px] mb-5" alt="" />
                    <div className="whitespace-pre-line font-semibold text-2xl mb-5">{solution.title}</div>
                    <div className="text-sm text-text_color_1_supplement mb-4">{solution.desc}</div>
                    <DotList className="text-sm" list={solution.list} />
                  </div>
                )
              })}
            </div>
          </>
        </Box>
        <Box className="lg:py-20">
          <>
            <Title className="mb-10" title={i18n.t('pages_us_stock34')} desc={i18n.t('pages_us_stock35')}></Title>
            <img alt="" src={tradeServiceImgMap.architecture[i18n.i18n.language]} />
            <hr className=" border-[#EAEBEC] my-10 lg:my-20"></hr>
            <Title className="mb-10" title={i18n.t('pages_us_stock36')}></Title>
            {tradeServiceList.map((it, index) => {
              return (
                <div
                  key={index}
                  className={classNames({
                    'pb-10 pt-10': true,
                  })}
                >
                  <TextPictureSecondary
                    withDotList
                    item={it}
                    className={classNames(it.className || 'md:space-x-12 xl:space-x-24', 'space-y-10 lg:space-y-0')}
                    button={it.button}
                    descClassName="!leading-10 !text-[28px] !my-0"
                    titleWrapperClassName="!mb-6"
                  />
                </div>
              )
            })}
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
export default UsStock

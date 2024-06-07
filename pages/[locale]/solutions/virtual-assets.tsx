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

const contentImgMap: any = {
  left: {
    'en': 'https://assets.lbkrs.com/uploads/07f79a53-6a99-4a7e-9704-f465af105ac5/va_trade_2_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/8d35f52e-5d73-4b47-b74a-0e41f1e6775b/va_trade_2_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/d93a0fac-0f4e-4e0b-8b82-c01ffdc46ddb/va_trade_2_hk.png',
  },
  right: {
    'en': 'https://assets.lbkrs.com/uploads/c8bad460-8818-4c32-995f-afc4ac3353eb/va_account_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/8fbdc86b-65e4-4366-98b8-5d6c7b6166ea/va_account_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/d5a5c257-c358-411a-b1bb-98ef1396ff1f/va_account_hk.png',
  },
}

const tradeServiceImgMap: any = {
  trade: {
    'en': 'https://assets.lbkrs.com/uploads/a47816f4-0063-4198-98cf-ef8926308c07/va-trade-en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/af3a35a1-af6a-4185-b993-608d6660572c/va-trade-cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/f1d670fd-830a-4917-96a8-f5d28229e03b/va-trade-hk.png',
  },
  account: {
    'en': 'https://assets.lbkrs.com/uploads/968e6dbd-2e92-4f88-9158-230ae8ce96ee/va-account-en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/48bb744c-0d5d-46dd-bd65-e9ebbef01ce1/va-account-cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/b5da436e-4f53-444f-8679-3c7adf15ce98/va-account-hk.png',
  },
  trade2: {
    'en': 'https://assets.lbkrs.com/uploads/0bd6da77-eede-4722-82d7-b865bad90105/va_trade_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/7607fc4e-f459-4b8b-aac7-1ce735ff1a0d/va_trade_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/c93c0cce-3421-4564-a76c-9d77728300f5/va_trade_hk.png',
  },
  backend: {
    'en': 'https://assets.lbkrs.com/uploads/0757c3ee-6639-4a11-a9e9-a0eacefb9d40/back-office-en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/388bc672-1105-4fa9-a241-52debb4b8475/back-office-cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/c1a88c8e-df0b-4379-b52a-3955993c6c66/back-office-hk.png',
  },
}

const VirtualAssets = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const table_1 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('pages_locale_solutions_app_plus_8694'), light: true },
      { title: i18n.t('pages_locale_solutions_app_plus_8696'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_virtual_assets_8911213'),
        value: [[i18n.t('pages_locale_solutions_virtual_assets_891141'), true, true]],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8796'),
        value: [
          [
            <div key="base-order">
              <div>{i18n.t('pages_locale_solutions_virtual_assets_891142')}</div>
              <div className="text-xs text-text_color_2">
                {i18n.t('pages_locale_solutions_securities_market_8910_4')}
              </div>
            </div>,
            true,
            true,
          ],
        ],
      },
      {
        label: i18n.t('src_pages_atm_deposit_add_single_index_8657'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8852'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8853'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8854'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8855'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8856'), true, true],
          [
            <div key="haircut">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_22')}</div>
              <div className="text-xs text-text_color_2">
                {i18n.t('pages_locale_solutions_securities_market_8910_23')}
              </div>
            </div>,
            true,
            true,
          ],
          [
            <div key="risk-control">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_24')}</div>
              <div className="text-xs text-text_color_2">
                {i18n.t('pages_locale_solutions_securities_market_8910_25')}
              </div>
            </div>,
            true,
            true,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8857'), false, true],
        ],
      },
    ],
    colRatio: [14, 58, 14, 14],
  }
  const table_2 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('pages_locale_solutions_app_plus_8694'), light: true },
      { title: i18n.t('pages_locale_solutions_app_plus_8696'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8831'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8832'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8833'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8834'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8835'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8836'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8837'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8838'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8839'), true, true],
          [
            'eDDA, sDDA',
            false,
            <span className="text-text_color_1_supplement" key="eDDA-sDDA">
              {i18n.t('pages_locale_solutions_securities_market_8910_18')}
            </span>,
          ],
          [
            i18n.t('pages_locale_solutions_securities_market_8840'),
            false,
            <span className="text-text_color_1_supplement" key="sa-1">
              {i18n.t('pages_locale_solutions_securities_market_8910_20')}
            </span>,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8841'), false, true],
          [i18n.t('pages_locale_solutions_securities_market_8842'), false, true],
          [i18n.t('pages_locale_solutions_securities_market_8843'), false, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8870'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8871'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8872'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8873'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8874'), true, true],
          [
            <div key="data-source">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_28')}</div>
              <div className="text-xs text-text_color_2">
                {i18n.t('pages_locale_solutions_securities_market_8910_29')}
              </div>
            </div>,
            true,
            true,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8875'), false, true],
          [i18n.t('pages_locale_solutions_securities_market_8876'), true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8877'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8878'), true, true],
          [i18n.t('crm_page_007'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8879'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8880'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8881'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8882'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8883'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8884'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8885'), false, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8886'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8887'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8888'), true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8889'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8890'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8891'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8892'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8893'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8894'), true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8895'),
        value: [[i18n.t('pages_locale_solutions_securities_market_8896'), true, true]],
      },
    ],
    colRatio: [14, 58, 14, 14],
  }

  const contentServicesList = useMemo(() => {
    return [
      {
        img: contentImgMap.left[i18n.i18n.language],
        title: i18n.t('market_features_006'),
        list: [
          {
            text: i18n.t('pages_virtual_assets5'),
          },
          {
            text: i18n.t('pages_virtual_assets6'),
          },
          {
            text: i18n.t('pages_virtual_assets7'),
          },
        ],
      },
      {
        img: contentImgMap.right[i18n.i18n.language],
        title: i18n.t('pages_locale_solutions_app_plus_8679'),
        className: 'lg:flex-row-reverse',
        button: <ContactUs className="mt-10" text={i18n.t('features_solutions_info_introduce_891112')} />,
        list: [
          {
            text: i18n.t('pages_virtual_assets9'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891121'),
          },
          {
            text: i18n.t('pages_virtual_assets11'),
          },
        ],
      },
    ]
  }, [])

  const tradeServiceList = useMemo(() => {
    return [
      {
        img: tradeServiceImgMap.trade[i18n.i18n.language],
        title: i18n.t('pages_locale_solutions_virtual_assets_891123'),
        desc: i18n.t('pages_locale_solutions_virtual_assets_891124'),
        button: undefined,
        list: [
          {
            text: i18n.t('pages_virtual_assets13'),
          },
          {
            text: i18n.t('pages_virtual_assets14'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891128'),
          },
        ],
      },
      {
        img: tradeServiceImgMap.account[i18n.i18n.language],
        title: i18n.t('pages_virtual_assets16'),
        desc: i18n.t('pages_locale_solutions_virtual_assets_891129'),
        className: 'lg:flex-row-reverse',
        button: undefined,
        list: [
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891130'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891132'),
          },
          {
            text: i18n.t('pages_virtual_assets19'),
          },
          {
            text: i18n.t('pages_virtual_assets20'),
          },
        ],
      },
      {
        img: tradeServiceImgMap.account[i18n.i18n.language],
        title: i18n.t('pages_virtual_assets21'),
        desc: i18n.t('pages_virtual_assets21_1'),
        button: undefined,
        list: [
          {
            text: i18n.t('pages_virtual_assets22'),
          },
          {
            text: i18n.t('pages_virtual_assets23'),
          },
          {
            text: i18n.t('pages_virtual_assets24'),
          },
        ],
      },
    ]
  }, [])

  const trade: ITextPictureSecondary = {
    item: {
      img: tradeServiceImgMap.trade2[i18n.i18n.language],
      desc: i18n.t('pages_small_brokerages10'),
      list: [
        {
          text: i18n.t('pages_locale_solutions_virtual_assets_891136'),
        },
        {
          text: i18n.t('pages_locale_solutions_virtual_assets_891139'),
        },
      ],
    },
  }
  const backend: ITextPictureSecondary = {
    item: {
      img: tradeServiceImgMap.backend[i18n.i18n.language],
      desc: i18n.t('pages_brokerages48'),
      list: [
        {
          text: i18n.t('pages_virtual_assets30'),
        },
        {
          text: i18n.t('pages_locale_solutions_virtual_assets_891145'),
        },
        {
          text: i18n.t('pages_locale_solutions_virtual_assets_891146'),
        },
      ],
    },
  }
  const combineList = [
    i18n.t('pages_virtual_assets34'),
    i18n.t('pages_virtual_assets35'),
    i18n.t('pages_virtual_assets36'),
    i18n.t('pages_virtual_assets37'),
    i18n.t('pages_virtual_assets38'),
  ]

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('virtual-assets.title')} description={seoI18n.t('virtual-assets.description')} />
      <div>
        <SolutionBanner
          label={i18n.t('pages_virtual_assets0')}
          title={i18n.t('pages_virtual_assets1')}
          secondLineTitle=""
          desc={i18n.t('pages_virtual_assets2')}
        />
        <Box className="lg:py-20">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_app_plus_8700')}
              title={i18n.t('pages_locale_solutions_app_plus_8743')}
            ></Title>
            <div className="flex flex-col mt-10 lg:space-x-10 lg:flex-row gap-y-5 lg:gap-y-0">
              {contentServicesList.map((item: any, index) => {
                return <PictureTextBorderCard item={item} key={index} />
              })}
            </div>
          </>
        </Box>
        {tradeServiceList.map((it, index) => {
          return (
            <Box
              className={classNames({
                'bg-bg_color_2': index % 2 === 0,
              })}
              key={index}
            >
              <div
                className={classNames({
                  'pb-10 pt-10': true,
                })}
              >
                <TextPictureSecondary withDotList item={it} className={it.className} button={it.button} />
              </div>
            </Box>
          )
        })}

        <Box className="lg:py-20">
          <>
            <Title label={i18n.t('pages_brokerages21')} title={i18n.t('pages_brokerages22')}></Title>
            <TextPictureSecondary
              className="py-10"
              {...trade}
              withDotList
              descClassName="!font-medium !text-[28px] !leading-10"
              button={
                <div className="flex mt-6">
                  <ContactUsBlack text={i18n.t('features_solutions_info_introduce_891112')} />
                </div>
              }
            />

            <Table data={table_1} thColSpan={1} />
            <hr className="mt-20 border-[#EAEBEC]"></hr>
            <TextPictureSecondary
              className="py-10 flex-row-reverse"
              {...backend}
              withDotList
              descClassName="!font-medium !text-[28px] !leading-10"
              button={
                <div className="flex mt-6">
                  <ContactUsBlack text={i18n.t('features_solutions_info_introduce_891112')} />
                </div>
              }
            />
            <hr className=" border-[#EAEBEC]"></hr>
            <Table data={table_2} thColSpan={1} />
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
export default VirtualAssets

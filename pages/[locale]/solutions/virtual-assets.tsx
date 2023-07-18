import React, { useMemo } from 'react'
import classNames from 'classnames'
import { TalkToUs } from '@/features/talk-to-us'
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
import TextPictureSecondary from '@/features/common/text-picture-secondary'
import PictureTextBorderCard from '@/features/common/picture-text-bordercard'

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

const VirtualAssets = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const banner_props = {
    title: i18n.t('features_header_index_891113'),
    desc: [i18n.t('pages_locale_solutions_virtual_assets_891114')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
    },
  }
  const content_banner_props = {
    title: i18n.t('pages_locale_solutions_virtual_assets_891135'),
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8771'),
      i18n.t('pages_locale_solutions_virtual_assets_891136'),
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
    },
    // localLink: '/longport',
  }
  const content_banner_props_2 = {
    title: i18n.t('pages_locale_solutions_virtual_assets_891137'),
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8773'),
      i18n.t('pages_locale_solutions_virtual_assets_891138'),
      i18n.t('pages_locale_solutions_virtual_assets_891139'),
      i18n.t('pages_locale_solutions_securities_market_8777'),
      i18n.t('pages_locale_solutions_virtual_assets_891140'),
    ],
    reverse: false,
    img: {
      'en': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
    },
  }
  const content_banner_props_3 = {
    title: i18n.t('pages_locale_solutions_virtual_assets_891143'),
    desc: [
      i18n.t('pages_locale_solutions_virtual_assets_891144'),
      i18n.t('pages_locale_solutions_virtual_assets_891145'),
      i18n.t('pages_locale_solutions_virtual_assets_891146'),
      i18n.t('pages_locale_solutions_securities_market_8781'),
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
    },
  }

  const table_1 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('pages_locale_solutions_app_plus_8694'), light: true },
      { title: i18n.t('pages_locale_solutions_app_plus_8696'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8801'),
        value: [
          [
            <div>
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_14')}</div>
              <div className="text-text_color_2 text-xs">
                {i18n.t('pages_locale_solutions_securities_market_8910_15')}
              </div>
            </div>,
            true,
            true,
          ],
          [
            <div>
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_16')}</div>
              <div className="text-text_color_2 text-xs">
                {i18n.t('pages_locale_solutions_securities_market_8910_17')}
              </div>
            </div>,
            true,
            true,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8802'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8803'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8804'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8805'), true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8812'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8813'), true, true],
          ['Margin Call', true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8814'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8815'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8816'), true, true],
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
        label: i18n.t('pages_locale_solutions_securities_market_8801'),
        value: [[i18n.t('pages_locale_solutions_virtual_assets_891141'), true, true]],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8796'),
        value: [
          [
            <div>
              <div>{i18n.t('pages_locale_solutions_virtual_assets_891142')}</div>
              <div className="text-text_color_2 text-xs">
                {i18n.t('pages_locale_solutions_securities_market_8910_4')}
              </div>
            </div>,
            true,
            true,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8817'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8818'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8819'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8820'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8821'), false, true],
        ],
      },
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
            <span className="text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_18')}
            </span>,
          ],
          [
            i18n.t('pages_locale_solutions_securities_market_8840'),
            false,
            <span className="text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_20')}
            </span>,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8841'), false, true],
          [i18n.t('pages_locale_solutions_securities_market_8842'), false, true],
          [i18n.t('pages_locale_solutions_securities_market_8843'), false, true],
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
            <div>
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_22')}</div>
              <div className="text-text_color_2 text-xs">
                {i18n.t('pages_locale_solutions_securities_market_8910_23')}
              </div>
            </div>,
            true,
            true,
          ],
          [
            <div>
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_24')}</div>
              <div className="text-text_color_2 text-xs">
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
  const table_3 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('pages_locale_solutions_app_plus_8694'), light: true },
      { title: i18n.t('pages_locale_solutions_app_plus_8696'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8870'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8871'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8872'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8873'), true, true],
          [i18n.t('pages_locale_solutions_securities_market_8874'), true, true],
          [
            <div>
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_28')}</div>
              <div className="text-text_color_2 text-xs">
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
        img: 'https://assets.lbkrs.com/uploads/1f4269fb-362c-4d4a-877c-b5ea25a7cda9/marketing_banner_cn.svg' || i18n.t('packages_xadmin_shared_config_menus_7695'),
        title: i18n.t('pages_locale_solutions_virtual_assets_891115'),
        list: [
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891117'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891118'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891119'),
          },
        ],
      },
      {
        img:'https://assets.lbkrs.com/uploads/1f4269fb-362c-4d4a-877c-b5ea25a7cda9/marketing_banner_cn.svg' || i18n.t('packages_xadmin_shared_config_menus_7695'),
        title: i18n.t('pages_locale_solutions_virtual_assets_891115'),
        className: 'lg:flex-row-reverse',
        button: <TalkToUs className="mt-10" text={i18n.t('features_solutions_info_introduce_891112')} />,
        list: [
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891120'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891121'),
          },
          {
            text: i18n.t('pages_locale_solutions_virtual_assets_891122'),
          },
        ],
      },
    ]
  }, [])

  const tradeServiceList = useMemo(() => {
    return [
      {
        img: i18n.t('packages_xadmin_shared_config_menus_7695'),
        title: i18n.t('pages_locale_solutions_virtual_assets_891125'),
        button: undefined,
        list: [
          {
            img: 'https://pub.lbkrs.com/static/offline/202301/DJpxkYQF5MzQjqQ8/list.svg',
            text: i18n.t('pages_locale_solutions_virtual_assets_891126'),
          },
          {
            img: 'https://assets.lbkrs.com/uploads/3532eeb3-0628-446e-af01-a32e500fafdb/pl_analysis.png',
            imgStyle: { height: '40px' },
            text: i18n.t('pages_locale_solutions_virtual_assets_891127'),
          },
          {
            img: 'https://pub.lbkrs.com/static/offline/202301/hhec68Xh6JMi6MHY/list_record.svg',
            text: i18n.t('pages_locale_solutions_virtual_assets_891128'),
          },
        ],
      },
      {
        img: i18n.t('packages_xadmin_shared_config_menus_7695'),
        title: i18n.t('pages_locale_solutions_virtual_assets_891129'),
        className: 'lg:flex-row-reverse',
        button: undefined,
        list: [
          {
            img: 'https://assets.lbkrs.com/uploads/4863c2a8-9bbf-45ee-ac60-294f2461edec/report.png',
            imgStyle: { height: '40px' },
            text: i18n.t('pages_locale_solutions_virtual_assets_891130'),
          },
          {
            img: 'https://assets.lbkrs.com/uploads/8d8724e7-26a5-4528-9f89-d59a4d193e35/aim.png',
            imgStyle: { height: '40px' },
            text: i18n.t('pages_locale_solutions_virtual_assets_891131'),
          },
          {
            img: 'https://assets.lbkrs.com/uploads/0c34320c-c99c-434f-88a9-b9a7b80b721c/broker.png',
            imgStyle: { height: '40px' },
            text: i18n.t('pages_locale_solutions_virtual_assets_891132'),
          },
        ],
      },
    ]
  }, [])

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('virtual-assets.title')} description={seoI18n.t('virtual-assets.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_app_plus_8700')}
              title={i18n.t('pages_locale_solutions_app_plus_8743')}
            ></Title>
            <div className="flex flex-col lg:space-x-10 lg:flex-row mt-10 gap-y-5">
              {contentServicesList.map((item: any, index) => {
                return <PictureTextBorderCard item={item} key={index} />
              })}
            </div>
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_virtual_assets_891123')}
              title={i18n.t('pages_locale_solutions_virtual_assets_891124')}
            ></Title>
            {tradeServiceList.map((it, index) => {
              return (
                <div
                  className={classNames({
                    'pb-10 pt-10': true,
                    'border-solid border-b border-y-#EAEBEC': index !== tradeServiceList.length - 1,
                  })}
                  key={index}
                >
                  <TextPictureSecondary item={it} className={it.className} button={it.button} />
                </div>
              )
            })}
          </>
        </Box>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_virtual_assets_891133')}
              title={i18n.t('pages_locale_solutions_virtual_assets_891134')}
            ></Title>
            <div className="pt-10">
              <ImageAndText {...content_banner_props} />
            </div>
            <Table data={table_1} thColSpan={1} />
            <hr className="mt-20 border-[#EAEBEC]"></hr>
            <div className="pt-10">
              <ImageAndText {...content_banner_props_2} />
            </div>
            <Table data={table_2} thColSpan={1} />
            <hr className="mt-20 border-[#EAEBEC]"></hr>
            <div className="pt-10">
              <ImageAndText {...content_banner_props_3} />
            </div>
            <Table data={table_3} thColSpan={1} />
          </>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}
export default VirtualAssets

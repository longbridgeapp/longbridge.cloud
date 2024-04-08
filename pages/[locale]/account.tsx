import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { NewBanner as Banner } from '@/features/product/Banner'
import PageDivide from '@/features/solutions/page-divide'
import InfoIntroduce, { ImageAndText } from '@/features/solutions/info-introduce'
import Compare, { ICompareProps } from '@/components/compare'
import Table, { ITable } from '@/components/table'
import RightIcon from '@/components/right-icon'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import { WhaleOfficialFooterNew } from '@/features/whale-official/footer'
import DotList from '@/components/dot-list'
import Advantage, { IAdvantageProps } from '@/features/product/Advantage'

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
/** 将数组转换为换行 jsx */
function arrayToLineJsx(arr: any[]) {
  return arr.map((item, index) => {
    return (
      <>
        {item}
        {index !== arr.length - 1 && <br />}
      </>
    )
  })
}
const images = {
  compare1_left: {
    'en': 'https://assets.lbkrs.com/uploads/809998e9-a833-4306-8e53-8b4aa9bf3167/compare1_left_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/f5d45ee2-974d-4bba-a05e-76309b6c5582/compare1_left_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/959c4696-02f1-4bc0-ba34-ac838d5ccf0c/compare1_left_hk.png',
  },
  compare1_right: {
    'en': 'https://assets.lbkrs.com/uploads/8a03747a-1e6c-4ae2-a06b-cb14cfc480c5/compare1_right_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/5e9309b6-d777-4170-bb09-139e7380aa1f/compare1_right_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/37262326-f752-47c6-a8df-7c5cd8ac37e4/compare1_right_hk.png',
  },
  compare2_left: {
    'zh-CN': 'https://assets.lbkrs.com/uploads/2df32199-b54d-4f70-8be4-70d278b01a56/compare2_left_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/a2237b0b-2b4a-4aee-a08e-f487b156e08e/compare2_left_hk.png',
    'en': 'https://assets.lbkrs.com/uploads/d5f49060-7647-40b9-8a65-743307890269/compare2_left_en.png',
  },
  compare2_right: {
    'en': 'https://assets.lbkrs.com/uploads/646fbbaa-b5df-4529-8e04-9df3d573fe9c/compare2_right_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/cda8e4e8-faaf-47eb-ad00-a74b09a3e347/compare2_right_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/75f3d9eb-960c-4b0e-94c8-700d40da33be/compare2_right_hk.png',
  },
}

const AccountPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const t = i18n.t

  const banner_props = {
    title: i18n.t('pages_locale_account_zcdue67crb'),
    desc: [i18n.t('pages_locale_account_lfecd6tvjo')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/5d42e234-00f3-4d20-92de-c725d6887a90/banner_en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/fc93da5e-e581-457b-8fb9-02fdf934d72e/banner_cn.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/37183c7b-2b1c-4705-af78-cc13ff4ad764/banner_hk.png',
    },
  }

  const compareList: ICompareProps[] = [
    {
      imgSrc: images.compare1_left,
      subTitle: i18n.t('pages_locale_account_kpudmu0w4f'),
      subList: [
        i18n.t('pages_locale_account_mnm8tgwdsd'),
        i18n.t('pages_locale_account_deeefisfdg'),
        i18n.t('pages_locale_account_ccs2bsrxuc'),
        i18n.t('pages_locale_account_vj0cpuyizz'),
      ],
    },
    {
      subTitle: i18n.t('pages_locale_account_n0kyy6a9jw'),
      imgSrc: images.compare1_right,
      subList: [
        i18n.t('pages_locale_account_c4mmvxthle'),
        i18n.t('pages_locale_account_s4kx_jzuzf'),
        i18n.t('pages_locale_account_4gnarfemu3'),
      ],
    },
  ]
  const compareList2: ICompareProps[] = [
    {
      imgSrc: images.compare2_left,
      subTitle: i18n.t('pages_locale_account_bgdkxziaww'),
      subList: [
        i18n.t('pages_locale_account_m9haydprge'),
        i18n.t('pages_locale_account_qkektjoc2x'),
        i18n.t('pages_locale_account_heaytesepw'),
      ],
    },
    {
      subTitle: i18n.t('pages_locale_account_ui3pxluit9'),
      imgSrc: images.compare2_right,
      subList: [
        i18n.t('pages_locale_account_5aawif2vwd'),
        i18n.t('pages_locale_account_rjmhn1ba7n'),
        i18n.t('pages_locale_account_mi7zewtzvj'),
        i18n.t('pages_locale_account_oay0vxm1p_'),
      ],
    },
  ]

  const table_1: ITable = {
    heads: [
      { title: i18n.t('pages_locale_account_lwizrryykc') },
      {
        title: i18n.t('pages_locale_account_n0ayj8wodf'),
      },
      {
        title: i18n.t('pages_locale_account_cb48w8dluk'),
      },
      {
        title: i18n.t('pages_locale_account_x_9c75e1bj'),
      },
      {
        title: i18n.t('pages_locale_account_b9m8nzw5m1'),
      },
    ],
    hideFirstBgTh: true,
    body: [
      {
        label: i18n.t('pages_locale_account_dvrtmvwfsk'),
        value: [
          [
            arrayToLineJsx([i18n.t('pages_locale_account_g97ayweak3'), 'House']),
            arrayToLineJsx([i18n.t('pages_locale_account_df6dhnluae'), i18n.t('pages_locale_account_inddcsdq_c')]),
            arrayToLineJsx([
              i18n.t('pages_locale_account_mzksdtpk9o'),
              i18n.t('pages_locale_account_hity46aveo'),
              i18n.t('pages_locale_account_8qida1n1n_'),
              i18n.t('pages_locale_account_ehrwluzxdf'),
              i18n.t('pages_locale_account_zzbn1ewozq'),
            ]),
            {
              children: i18n.t('pages_locale_account_qmeyjkhag3'),
              rowSpan: 3,
            },
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_account_olysqazvuj'),
        value: [
          [
            arrayToLineJsx([i18n.t('pages_locale_account_g97ayweak3'), 'House']),
            arrayToLineJsx([i18n.t('pages_locale_account_df6dhnluae'), i18n.t('pages_locale_account_inddcsdq_c')]),
            arrayToLineJsx([i18n.t('pages_locale_account_zzbn1ewozq')]),
            {
              rowSpan: 0,
              children: '',
            },
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_account_u31azfntsm'),
        value: [
          [
            arrayToLineJsx([i18n.t('pages_locale_account_g97ayweak3'), 'House', 'OB']),
            arrayToLineJsx([i18n.t('pages_locale_account_df6dhnluae'), i18n.t('pages_locale_account_inddcsdq_c')]),
            arrayToLineJsx([i18n.t('pages_locale_account_zzbn1ewozq')]),
            {
              rowSpan: 0,
              children: '',
            },
          ],
        ],
      },
    ],
    colRatio: [15, 15, 15, 15, 40],
  }
  // 认证方式特点
  const authenticFeatures = [
    i18n.t('pages_locale_account_q6xztqsz2o'),
    i18n.t('pages_locale_account_891125'),
    i18n.t('pages_locale_account_4nor_psfcz'),
  ]
  const kycFeatures = [
    i18n.t('pages_locale_account_9wbv9delxg'),
    i18n.t('pages_locale_account_wr9896jqjt'),
    i18n.t('pages_locale_account_dgdwciqpht'),
  ]

  const authenticAdvantages: IAdvantageProps['data'] = [
    {
      icon: 'https://assets.lbkrs.com/uploads/7996ec43-cf9a-41fe-93a6-5b66c3afc6e1/icon_1.png',
      title: i18n.t('pages_locale_account_ypk4ddvbpn'),
      list: [
        i18n.t('pages_locale_account_fndjomwylf'),
        i18n.t('pages_locale_account_ccs2bsrxuc'),
        i18n.t('pages_locale_account_vj0cpuyizz'),
      ],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/95d6d61d-bf0f-4bc0-adcd-183ef1f053f0/icon_2.png',
      title: i18n.t('pages_locale_account_bvuckgekhx'),
      list: [
        i18n.t('pages_locale_account_cdww55ju78'),
        i18n.t('pages_locale_account_s4kx_jzuzf'),
        i18n.t('pages_locale_account_4gnarfemu3'),
      ],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/61fc89b8-0262-4ff6-9e87-10c02154eddb/icon_3.png',
      title: i18n.t('pages_locale_account_ldkwxahjve'),
      list: [
        i18n.t('pages_locale_account_7wiwgqptub'),
        i18n.t('pages_locale_account_mnm8tgwdsd'),
        i18n.t('pages_locale_account_ju0c1mldll'),
        i18n.t('pages_locale_account_n8qnyyllce'),
      ],
    },
  ]
  const kycAdvantages: IAdvantageProps['data'] = [
    {
      icon: 'https://assets.lbkrs.com/uploads/dcc9da6d-4e2e-4d14-a8b3-7332602e1e38/icon_1_gray.png',
      title: i18n.t('pages_locale_account_xwczjwu2i3'),
      list: [
        i18n.t('pages_locale_account_cju28it_fc'),
        i18n.t('pages_locale_account_oiacya_1u6'),
        i18n.t('pages_locale_account_zjeqrwpf_m'),
      ],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/e10e3eda-7327-47c0-82af-d7675fab8290/icon_3_gray.png',
      title: i18n.t('pages_locale_account_xpjb1igwpq'),
      list: [
        i18n.t('pages_locale_account_9wbv9delxg'),
        i18n.t('pages_locale_account_wr9896jqjt'),
        i18n.t('pages_locale_account_dgdwciqpht'),
      ],
    },
  ]

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('account.title')} description={seoI18n.t('account.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              title={i18n.t('pages_locale_account__9cpcanwoh')}
              desc={i18n.t('pages_locale_account_xupky3nsit')}
            ></Title>
            <Compare className="mt-10" compareId="account-1" list={compareList} />
          </>
        </Box>
        <Box>
          <>
            <h4 className="text-[28px] font-medium">{i18n.t('pages_locale_account_bq7ra1bxr5')}</h4>
            <DotList className="mt-6 mb-10" list={authenticFeatures} />
            <Table data={table_1} thColSpan={0} className="normal-table" />
          </>
        </Box>
        <Box className="!pb-0">
          <div className="relative pb-10">
            <img
              src="https://assets.lbkrs.com/uploads/5fcf34dd-a67a-41cb-b6d3-24bdaf0ad13d/bg_1.png"
              className="hidden lg:block absolute right-0 bottom-0 -z-10 w-1/3"
              alt=""
            />
            <h4 className="text-[28px] font-medium mb-8">{i18n.t('pages_locale_account_uxkv0spgsc')}</h4>
            <Advantage data={authenticAdvantages} />
          </div>
        </Box>
        <Box className="bg-bg_color_2 !pt-20">
          <>
            <Title
              title={i18n.t('pages_locale_account_kypkif5l_6')}
              desc={i18n.t('pages_locale_account_c7o4ihlfwy')}
            ></Title>
            <Compare className="mt-10 mb-20" compareId="account-1" list={compareList2} />
            <h4 className="text-[28px] font-medium">{i18n.t('pages_locale_account_jxkghpeogl')}</h4>
            <DotList
              className="mt-6 mb-20"
              list={kycFeatures}
              cols={{
                lg: 2,
                sm: 1,
              }}
            />
            <h4 className="text-[28px] font-medium mb-8">{i18n.t('pages_locale_account_uxkv0spgsc')}</h4>
            <Advantage data={kycAdvantages} />
          </>
        </Box>
        <WhaleOfficialFooterNew />
      </div>
    </Layout>
  )
}
export default AccountPage

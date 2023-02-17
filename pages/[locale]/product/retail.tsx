// 零售终端
import { Layout } from '@/features/common/page-layout'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo, useRef } from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import Banner from '@/features/product/Banner'
import Comment from '@/features/product/Comment'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import InfoIntroduce, { ImageAndText, ImageAndList } from '@/features/solutions/info-introduce'
import Compare from '@/components/compare'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const Retail: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  const banner_props = {
    title: i18n.t('features_header_index_3'),
    desc: [i18n.t('pages_locale_solutions_retail_5'), i18n.t('pages_locale_solutions_retail_5_1')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/2cbf2f1f-0f6f-4c4e-8e6d-92e68ae356f0/retail-banner-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/8ae1d3ce-6ae4-4fa7-bda1-9ada3196354c/retail-banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/8ae1d3ce-6ae4-4fa7-bda1-9ada3196354c/retail-banner.png',
    },
  }

  const compareList = [
    {
      title: 'LongPort',
      description: i18n.t('pages_locale_solutions_retail_6'),
      subTitle: i18n.t('pages_locale_solutions_retail_7'),
      subList: [
        i18n.t('pages_locale_solutions_retail_8'),
        i18n.t('pages_locale_solutions_retail_9'),
        i18n.t('pages_locale_solutions_retail_10'),
        i18n.t('pages_locale_solutions_retail_11'),
        i18n.t('pages_locale_solutions_retail_12'),
      ],
      thirdTitle: i18n.t('pages_locale_solutions_retail_13'),
      // autocorrect:false
      thirdDescription: 'Mobile、Pad、Web',
      // autocorrect:true
    },
    {
      title: 'White Label',
      description: i18n.t('pages_locale_solutions_retail_14'),
      subTitle: i18n.t('pages_locale_solutions_retail_7'),
      subList: [
        i18n.t('pages_locale_solutions_retail_15'),
        i18n.t('pages_locale_solutions_retail_16'),
        i18n.t('pages_locale_solutions_retail_17'),
        i18n.t('pages_locale_solutions_retail_18'),
        i18n.t('pages_locale_solutions_retail_19'),
      ],
      thirdTitle: i18n.t('pages_locale_solutions_retail_13'),
      // autocorrect:false
      thirdDescription: 'Mobile、Pad、Desktop、Web',
      // autocorrect:true
    },
  ]

  const content_banner_props = {
    title: i18n.t('pages_locale_solutions_retail_20'),
    subTitle: i18n.t('pages_locale_solutions_retail_21'),
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/b61dd812-e2fb-4043-9dc1-caec5464e4e8/i3.png',
        text: i18n.t('pages_locale_solutions_retail_22'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/1f23ea19-c31b-4a32-8bdb-3f0a32f06152/i1.png',
        text: i18n.t('pages_locale_solutions_retail_23'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/b7b610ed-a461-419a-b19f-72d394fdbbda/i2.png',
        text: i18n.t('pages_locale_solutions_retail_24'),
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/085917e8-5a11-46fa-9af6-5ff5f28dcaf0/banner-1-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/278c5a76-d094-406b-a3c5-6a3aadb1079c/banner1.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/278c5a76-d094-406b-a3c5-6a3aadb1079c/banner1.png',
    },
    needTalk: false,
  }
  const content_banner_props_2 = {
    title: i18n.t('pages_locale_solutions_retail_25'),
    subTitle: i18n.t('pages_locale_solutions_retail_26'),
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/4bd95457-5d74-424e-a736-bbe01011b051/i3.png',
        text: i18n.t('pages_locale_solutions_retail_27'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/a7329109-54f9-4695-9855-8b716880e13b/i.png',
        text: i18n.t('pages_locale_solutions_retail_28'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/984b646a-ebdc-4267-97a4-66f75645da42/i2.png',
        text: i18n.t('pages_locale_solutions_retail_29'),
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/614664b7-941e-4394-9e63-e4f851c46b72/banner-2-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/d7ba0b31-3490-4161-9085-bbc2e730cbcf/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/d7ba0b31-3490-4161-9085-bbc2e730cbcf/banner.png',
    },
    needTalk: false,
    reverse: false,
  }
  const content_banner_props_3 = {
    title: i18n.t('pages_locale_solutions_retail_30'),
    subTitle: i18n.t('pages_locale_solutions_retail_31'),
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/6d601e5e-faa5-41eb-a99c-4b8d2b59af8e/i3.png',
        text: i18n.t('pages_locale_solutions_retail_32'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/90df8667-5827-4055-8751-f542a9985743/i1.png',
        text: i18n.t('pages_locale_solutions_retail_33'),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/1c048341-b568-4989-86d8-4fdb5d2ab2e1/i2.png',
        text: i18n.t('pages_locale_solutions_retail_34'),
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/e7a96676-6934-481f-98a8-737989e151d5/banner-3-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/f6ecffff-4e51-4f0e-aeb4-fbc9f40b780a/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/f6ecffff-4e51-4f0e-aeb4-fbc9f40b780a/banner.png',
    },
    needTalk: false,
  }
  const content_banner_props_4 = {
    title: i18n.t('pages_locale_solutions_retail_35'),
    subTitle: i18n.t('pages_locale_solutions_retail_36'),
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/352d4d80-73a6-4aee-b192-188ca835b300/i3.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_50')}</span>
            {i18n.t('pages_locale_solutions_retail_51')}
          </div>
        ),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/ff03023b-7ab4-4f57-8072-32cb1e23750e/i1.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_52')}</span>
            {i18n.t('pages_locale_solutions_retail_53')}
          </div>
        ),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/38af6b42-18fd-4029-91e3-32c9be8e1837/i2.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_54')}</span>
            {i18n.t('pages_locale_solutions_retail_55')}
          </div>
        ),
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/1eded101-8c10-44e5-aee1-c6b334742717/banner-4-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/46ba6579-ef04-4ade-baae-31fe099c62af/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/46ba6579-ef04-4ade-baae-31fe099c62af/banner.png',
    },
    needTalk: false,
    reverse: false,
  }

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_37')}
              title={i18n.t('pages_locale_solutions_retail_38')}
            />
            <InfoIntroduce
              className="mt-8"
              descClass="text-sm text-text_color_1"
              data={[
                {
                  icon: 'https://assets.lbkrs.com/uploads/2487aaf2-d82f-4b9b-8e47-c27b50e968b7/Union (2).png',
                  iconClass: 'w-[30px] h-auto',
                  title: 'Mobile',
                  description: i18n.t('pages_locale_solutions_retail_39'),
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/6cb133cb-fe21-4b12-9109-8843159271eb/Union (3).png',
                  iconClass: 'w-9 h-auto',
                  title: 'Pad',
                  description: i18n.t('pages_locale_solutions_retail_40'),
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/ca30756a-195c-4023-9f5d-4c2b2ff664fd/Vector (1).png',
                  iconClass: 'h-auto',
                  title: 'Web',
                  description: i18n.t('pages_locale_solutions_retail_41'),
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/fff6b0a5-3cb5-424d-a7b4-f9a6819bf38c/Vector (2).png',
                  iconClass: 'h-auto',
                  title: 'Desktop',
                  description: i18n.t('pages_locale_solutions_retail_42'),
                },
              ]}
            />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_37')}
              title={i18n.t('pages_locale_solutions_retail_43')}
            />
            <Compare className="my-10" compareId="app-plus" list={compareList} />
          </>
        </Box>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_44')}
              title={i18n.t('pages_locale_solutions_retail_45')}
            />
            <ImageAndList {...content_banner_props} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_2} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_3} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_4} />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_46')}
              title={i18n.t('pages_locale_solutions_retail_47')}
            />
            <Comment
              className="mt-8"
              data={[
                {
                  avatar: 'https://assets.lbkrs.com/uploads/76d421f5-6408-403f-b2f1-c1b24dcb767f/avatar1.png',
                  name: 'luzhen 1982',
                  platform: i18n.t('pages_locale_solutions_retail_48'),
                  description: i18n.t('pages_locale_solutions_retail_49'),
                },
                {
                  avatar: 'https://assets.lbkrs.com/uploads/2d7f91ea-3ba2-45f0-af8d-953dec51d8d5/avatar2.png',
                  name: '憋的慌不要见怪',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_58'),
                },
                {
                  avatar: 'https://assets.lbkrs.com/uploads/0fe3eb8b-d01e-44ef-86c1-4cb5d7d7b7b2/avatar3.png',
                  name: 'zhuyalu84',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_59'),
                },
                {
                  avatar: 'https://assets.lbkrs.com/uploads/b0e24d73-cd50-40ec-94d8-6e7775520924/avatar4.png',
                  name: 'GzxGisele',
                  platform: i18n.t('pages_locale_product_retail_60'),
                  description: i18n.t('pages_locale_product_retail_61'),
                },
                {
                  avatar: 'https://assets.lbkrs.com/uploads/4d9bdbba-0647-4d53-a5c0-8c5dd344f474/avatar5.png',
                  name: 'mj19940515',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_62'),
                },
                {
                  avatar: 'https://assets.lbkrs.com/uploads/725287ab-0761-42d1-b2ca-fd8e06bce10e/avatar6.png',
                  name: 'W20211101',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_63'),
                },
              ]}
            />
          </>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Retail

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
import { Block, BlockBetween, TopBlock } from '@/components/block'
import { ContactUs, ContactUsGhost } from '@/features/talk-to-us'
import { Tabs } from 'antd'
import {
  BrokeragesCards,
  BrokeragesProducts,
  BrokeragesProductsTable,
  BrokeragesQuotes,
  BrokeragesTabs,
} from '@/features/solutions/brokerages'

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

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('brokerages.title')} description={seoI18n.t('brokerages.description')} />
      <TopBlock
        className="relative bg-center bg-no-repeat"
        imageUrl="https://assets.lbkrs.com/uploads/785c8bd0-f6d4-4876-964c-dbae5fa95d61/whale_bg.jpg"
      >
        <Block className="py-10 md:py-[72px] px-6 md:px-0">
          <BlockBetween
            left={
              <>
                <div className="mb-3 text-xl text-left text-text_color_3_supplement">
                  <div className="text-brand_color_3 mb-2">
                    <span>Whale </span>
                    <span>{i18n.t('pages_brokerages0')}</span>
                  </div>
                  <div className="text-white text-3xl lg:text-[40px] lg:leading-[56px] text-left font-semibold">
                    <span className=" lg:whitespace-nowrap lg:en:whitespace-normal">{i18n.t('pages_brokerages1')}</span>
                    {i18n.t('pages_brokerages1_1') && (
                      <>
                        <br />
                        <span>{i18n.t('pages_brokerages1_1')}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-base text-text_color_3_supplement mb-10">
                  <div>{i18n.t('pages_brokerages2')}</div>
                </div>
                <div className="flex space-x-4">
                  <ContactUsGhost />
                </div>
              </>
            }
            right={
              <div className="relative mt-10 lg:mt-0 w-full">
                <img
                  src="https://assets.lbkrs.com/uploads/198945cf-126e-4ff7-8f9e-47a5408254a7/slogan.png"
                  alt="zero to one"
                  className="right-0 object-cover w-4/5 lg:w-[380px] xl:w-[428px] lg:absolute top-1/2 lg:-translate-y-1/2"
                />
              </div>
            }
          ></BlockBetween>
        </Block>
      </TopBlock>
      <div>
        <Box className="md:py-20">
          <BrokeragesTabs />
        </Box>
        <Box className="bg-bg_color_2 md:py-20">
          <>
            <div className="mb-10">
              <Title
                label={i18n.t('pages_brokerages21')}
                title={i18n.t('pages_brokerages22')}
                desc={i18n.t('pages_brokerages23')}
              />
            </div>

            <BrokeragesCards />
          </>
        </Box>
        <Box className="md:py-20">
          <BrokeragesProducts />
        </Box>
        <Box className="md:py-20 bg-brand_color">
          <BrokeragesQuotes />
        </Box>
        <Box className="md:py-20">
          <BrokeragesProductsTable />
        </Box>
        <WhaleOfficialFooterNew />
      </div>
    </Layout>
  )
}
export default AccountPage

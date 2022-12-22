// 后台系统
import React from 'react'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '@/features/common/page-layout'
import { TalkToUs } from '@/features/talk-to-us'
import { CDN_IMAGES } from '@/constants'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import ImageIcon from '@/components/image-icon'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const Backstage: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <div className="flex flex-col gap-3 main-content-width lg:gap-16 lg:flex-row ">
            <div className="flex flex-col items-start gap-8 content max-w-[530px]">
              <div className="text-[44px] font-semibold">{i18n.t('whale-backstage-001')}</div>
              <div className="text-lg font-normal leading-9 text-text_color_2">
                <div>{i18n.t('whale-backstage-002')}</div>
                <div>{i18n.t('whale-backstage-003')}</div>
              </div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="max-w-[620px]">
              <img src="https://pub.lbkrs.com/files/202212/p2JxoPtvXNsJCunE/Group_427319260__1_.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width lg:flex-row">
            <div className="flex flex-col items-start gap-8 content min-w-[485px]">
              <div>
                <div className="mb-2 text-base text-brand_color">{i18n.t('whale-backstage-004')}</div>
                <div className="text-4xl font-medium">{i18n.t('whale-backstage-005')}</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-006')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backstage-007')}</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-008')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backstage-009')} </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-010')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backstage-011')}</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/TLhxiVz6YiPiFVzd/Group_427319109.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backstage-012')}</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-013')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-014')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-015')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-016')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-017')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backstage-018')}</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/64ugGy9xFLTEagdg/Group_427319108.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">{i18n.t('whale-backstage-019')}</div>
            <div className="flex flex-col justify-center gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[500px]">
                <div className="mb-10 text-[28px] font-medium">
                  <div>{i18n.t('whale-backstage-020')}</div>
                  <div>{i18n.t('whale-backstage-021')}</div>
                </div>
                <ul className="flex flex-col text-text_color_3 gap-y-4">
                  <li className="list-dot">{i18n.t('whale-backstage-022')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-023')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-024')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-025')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-026')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-027')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-028')}</li>
                  <li className="list-dot">{i18n.t('whale-backstage-029')}</li>
                </ul>
              </div>
              <div>
                <img src="https://pub.lbkrs.com/files/202212/P3K4RrwMHdKnKv3Q/Group_427319186.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backstage-030')}</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-031')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-032')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-033')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-034')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-035')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backstage-036')}</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/qQFmxf16KXvYRHLz/Group_427319159.png" alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">{i18n.t('whale-backstage-037')}</div>
            <div className="flex flex-col items-start gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[475px] flex flex-col gap-8">
                <div className="text-2xl font-medium">{i18n.t('whale-backstage-038')}</div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Uoz4JvFGpFNxGF7f/pen.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                  {i18n.t('whale-backstage-039')}
                  </span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/xWEQJZ6PzZuHbnHc/treeview.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                  {i18n.t('whale-backstage-040')}
                  </span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/q2xDeZMTLrzfQuE6/unlock.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">
                  {i18n.t('whale-backstage-041')}
                  </span>
                </div>
              </div>
              <div>
                <img src="https://pub.lbkrs.com/files/202212/vTDjFkFe265SDaYK/Group_427319192.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backstage-042')}</div>
            <div className="flex flex-col justify-between gap-5 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-043')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-044')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-045')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backstage-046')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-047')}</div>
                <div className="text-base font-normal text-text_color_3">
                {i18n.t('whale-backstage-048')}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backstage-049')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backstage-050')}</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/mVWoqMYKVAsP35aN/Group_427319157.png" alt="" />
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Backstage

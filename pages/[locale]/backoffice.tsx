// 后台系统
import React from 'react'
import ImageIcon from '@/components/image-icon'
import { CDN_IMAGES } from '@/constants'
import { Layout } from '@/features/common/page-layout'
import { TalkToUs } from '@/features/talk-to-us'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const BackOffice: React.FC = () => {
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
              <div className="text-[44px] font-semibold">{i18n.t('whale-backoffice-001')}</div>
              <div className="text-lg font-normal leading-9 text-text_color_2">
                <div>{i18n.t('whale-backoffice-002')}</div>
                <div>{i18n.t('whale-backoffice-003')}</div>
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
                <div className="mb-2 text-base text-brand_color">{i18n.t('whale-backoffice-004')}</div>
                <div className="text-4xl font-medium">{i18n.t('whale-backoffice-005')}</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-006')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-007')}</div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-008')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-009')} </div>
              </div>
              <div>
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-010')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-011')}</div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.lbkrs.com/uploads/longbridge-whale/55f7fd97-0b35-49d0-b901-65e216407d8a/a1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backoffice-012')}</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-013')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-014')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-015')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-016')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-017')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-018')}</div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.lbkrs.com/uploads/longbridge-whale/16f8fd13-6684-4096-a7e2-8db057a4e169/a2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">{i18n.t('whale-backoffice-019')}</div>
            <div className="flex flex-col justify-center gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[500px]">
                <div className="mb-10 text-[28px] font-medium">
                  <div>{i18n.t('whale-backoffice-020')}</div>
                  <div>{i18n.t('whale-backoffice-021')}</div>
                </div>
                <ul className="flex flex-col text-text_color_3 gap-y-4">
                  <li className="list-dot">{i18n.t('whale-backoffice-022')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-023')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-024')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-025')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-026')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-027')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-028')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-029')}</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://assets.lbkrs.com/uploads/longbridge-whale/84a8997c-f2ff-46db-81a1-13af7a7ed58e/a4.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backoffice-030')}</div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-031')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-032')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-033')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-034')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-035')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-036')}</div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.lbkrs.com/uploads/longbridge-whale/fc51dcaa-a5d4-446d-b83a-b539d272d4b3/a5.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 main-container">
          <div className="main-content-width">
            <div className="mb-10 text-4xl font-medium">{i18n.t('whale-backoffice-037')}</div>
            <div className="flex flex-col items-start gap-12 lg:items-center lg:flex-row">
              <div className="min-w-[475px] flex flex-col gap-8">
                <div className="text-2xl font-medium">{i18n.t('whale-backoffice-038')}</div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/Uoz4JvFGpFNxGF7f/pen.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-039')}</span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/xWEQJZ6PzZuHbnHc/treeview.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-040')}</span>
                </div>
                <div className="flex items-center">
                  <ImageIcon url="https://pub.lbkrs.com/files/202212/q2xDeZMTLrzfQuE6/unlock.png" className="mr-8" />
                  <span className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-041')}</span>
                </div>
              </div>
              <div>
                <img
                  src="https://assets.lbkrs.com/uploads/longbridge-whale/62d809a8-72b3-41f1-941c-4fc6aac0653f/a6.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width ">
            <div className="text-4xl font-medium">{i18n.t('whale-backoffice-042')}</div>
            <div className="flex flex-col justify-between gap-5 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-043')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-044')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-045')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-046')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-047')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-048')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-backoffice-049')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-050')}</div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.lbkrs.com/uploads/longbridge-whale/51175fd0-5e84-41a3-9fa0-0cc6985a726a/a7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default BackOffice

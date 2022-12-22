// 投放系统
import React from 'react'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '@/features/common/page-layout'
import { TalkToUs } from '@/features/talk-to-us'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import { CDN_IMAGES } from '@/constants'
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

const Jettison: React.FC = () => {
  const i18n = useTranslation('common')
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="py-10 bg-cover main-container lg:py-20"
          style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
        >
          <div className="flex flex-col gap-8 main-content-width lg:flex-row">
            <div className="flex flex-col items-start flex-1 gap-8 content">
              <div className="text-[44px] font-semibold">{i18n.t('whale-jettison-001')}</div>
              <div className="text-lg leading-9 text-text_color_2 max-w-[500px]">
                <div>{i18n.t('whale-jettison-002')}</div>
                <div>{i18n.t('whale-jettison-003')}</div>
              </div>
              <TalkToUs className="mt-0" />
            </div>
            <div className="flex-1">
              <img src="https://pub.lbkrs.com/files/202212/4CWDZ8aWYLWNFFWi/Frame_427319006.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-jettison-004')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-jettison-005')}</div>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row">
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">{i18n.t('whale-jettison-006')}</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  {i18n.t('whale-jettison-007')}
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-008')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-009')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-010')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-011')}</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">{i18n.t('whale-jettison-012')}</div>
                  <div className="text-sm font-normal">{i18n.t('whale-jettison-013')}</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">{i18n.t('whale-jettison-014')}</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  {i18n.t('whale-jettison-015')}
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-016')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-017')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-018')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-019')}</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">{i18n.t('whale-jettison-020')}</div>
                  <div className="text-sm font-normal">{i18n.t('whale-jettison-021')}</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">{i18n.t('whale-jettison-022')}</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  {i18n.t('whale-jettison-023')}
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-024')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-025')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-026')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-027')}</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">{i18n.t('whale-jettison-028')}</div>
                  <div className="text-sm font-normal">{i18n.t('whale-jettison-029')}</div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/W7Z36VNEAzTmS4N2/Group_427319219.png" alt="" />
            </div>
            <div className="bg-[#fff] flex overflow-hidden border border-border_color">
              <div className="flex-1 p-10">
                <div className="text-[30px] font-semibold mb-2">{i18n.t('whale-jettison-030')}</div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>{i18n.t('whale-jettison-031')}</div>
                  <div className="h-6"></div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-032')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-033')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-034')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-035')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-bg_color_2">
                <div className="text-[30px] font-semibold mb-2">{i18n.t('whale-jettison-036')}</div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>{i18n.t('whale-jettison-037')}</div>
                  <div>{i18n.t('whale-jettison-038')}</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-032')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-040')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-041')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-035')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-brand_color text-[#fff]">
                <div className="text-[30px] font-semibold mb-2 flex items-center">
                  {i18n.t('whale-jettison-042')}
                  <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                    HOT
                  </span>
                </div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>{i18n.t('whale-jettison-043')}</div>
                  <div>{i18n.t('whale-jettison-044')}</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-jettison-032')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">{i18n.t('whale-jettison-045')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-041')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-046')}</li>
                    <li className="list-dot">{i18n.t('whale-jettison-047')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-jettison-048')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-jettison-049')}</div>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-jettison-050')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-051')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-jettison-052')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-053')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-jettison-054')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-055')}</div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/Ftr19SPvvNAGn36A/Group_427319267.png" alt="" />
            </div>
          </div>
        </div>
        <div className="py-10 bg-cover main-container lg:py-20">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-jettison-056')}</div>
              <div className="text-4xl font-medium">{i18n.t('whale-jettison-057')}</div>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:items-center lg:gap-40 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/Bow2VnpkGjCanKRE/Frame_427319007.png" alt="" />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <div className="text-[28px] font-medium">{i18n.t('whale-jettison-058')}</div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">{i18n.t('whale-jettison-059')}</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">{i18n.t('whale-jettison-060')}</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">{i18n.t('whale-jettison-061')}</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">{i18n.t('whale-jettison-062')}</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">{i18n.t('whale-jettison-063')}</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">{i18n.t('whale-jettison-064')}</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">{i18n.t('whale-jettison-065')}</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">{i18n.t('whale-jettison-066')}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 text-sm text-brand_color">{i18n.t('whale-jettison-067')}</div>
              <div className="p-8 rounded-lg bg-bg_color_2">
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div className="flex justify-between flex-1 w-full gap-12">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/zFeewQW7ZHsHffbz/circle_time.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-jettison-068')}</div>
                      <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-069')}</div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/3P85SNLi9ddXX921/me.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-jettison-070')}</div>
                      <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-071')}</div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-1 w-full gap-12">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/qYTkUnDVQamgWQVm/position.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-jettison-072')}</div>
                      <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-073')}</div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/bRjNqPJ7wb6faVwb/aim.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-jettison-074')}</div>
                      <div className="text-base font-normal text-text_color_3">{i18n.t('whale-jettison-075')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Jettison

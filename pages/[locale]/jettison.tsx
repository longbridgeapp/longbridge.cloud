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
              <div className="text-[44px] font-semibold">投放社区</div>
              <div className="text-lg leading-9 text-text_color_2">
                <div>以用户全生命周期运营为核心策略导向的数字化运营平台</div>
                <div>
                  通过选取合适的触达内容、合理的触达时机、符合运营策略的目标人群，组合
                  AppPush、Banner、Popup、SMS、Email等多种触达通道，精准触达客户。
                </div>
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
              <div className="mb-2 text-base text-brand_color">行业方案</div>
              <div className="text-4xl font-medium">数字化运营方案</div>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row">
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">场景化</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  需要以场景为单位，可快速实践运营策略的闭环工具
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">行业问题</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">上线新场景，协作流程长，成本高，时间长</li>
                    <li className="list-dot">目标受众不精细，难以分层运营</li>
                    <li className="list-dot">无法场景化触发，精准触达难</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">解决方案</div>
                  <div className="text-sm font-normal">
                    提供集运营策略 → 受众圈选 → 渠道触达 → 数据分析 → 策略优化为一体的闭环运营工具，助力场景化运营
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">体系化</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  需要有体系化的运营策略指导日常的运营活动
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">行业问题</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">运营动作没有持续性</li>
                    <li className="list-dot">运营动作单一</li>
                    <li className="list-dot">运营动作缺乏系统管理</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">解决方案</div>
                  <div className="text-sm font-normal">
                    提供体系化运营策略咨询服务，协助定义用户生命周期关键运营节点，落地不同阶段用户运营管理
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color">
                <div className="text-[22px] p-8 pb-0 font-medium mb-2">数据化</div>
                <div className="pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color">
                  需要可以构建完整用户画像的数据基础
                </div>
                <div className="flex-1 px-8 pb-5">
                  <div className="text-base font-medium mt-[30px] mb-[10px]">行业问题</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">各业务系统数据割裂</li>
                    <li className="list-dot">无法及时衡量数据效果</li>
                    <li className="list-dot">数据质量差，无统一标准</li>
                  </ul>
                </div>
                <div className="px-8 py-5 text-white bg-brand_color">
                  <div className="text-base font-medium mb-[10px]">解决方案</div>
                  <div className="text-sm font-normal">
                    提供客户数据整合能力，打通系统壁垒，统一应用标准，助力数据化运营
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://pub.lbkrs.com/files/202212/W7Z36VNEAzTmS4N2/Group_427319219.png" alt="" />
            </div>
            <div className="bg-[#fff] flex overflow-hidden border border-border_color">
              <div className="flex-1 p-10">
                <div className="text-[30px] font-semibold mb-2">基础版</div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>适合仅需要基础用户触达的企业选购</div>
                  <div className="h-6"></div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">功能说明</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">支持 2 种计划类型创建</li>
                    <li className="list-dot">支持 3 种触达通道</li>
                    <li className="list-dot">支持 2 类分群创建方式</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-bg_color_2">
                <div className="text-[30px] font-semibold mb-2">标准版</div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>适合轻量投放需求，5 人以内运营团队</div>
                  <div>期望构建标准投放能力，通过多通道触达用户</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">功能说明</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">支持 3 种计划类型创建</li>
                    <li className="list-dot">支持 5 种触达通道</li>
                    <li className="list-dot">支持 2 类分群创建方式</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-brand_color text-[#fff]">
                <div className="text-[30px] font-semibold mb-2 flex items-center">
                  专业版
                  <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                    HOT
                  </span>
                </div>
                <div className="text-base font-normal border-b border-dashed pb-7 border-tag_border_color">
                  <div>适合规模化投放需求，5 人及以上运营团队</div>
                  <div>期望构建智能投放能力，助力核心运营目标达成</div>
                </div>
                <div>
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">功能说明</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="list-dot">支持 4 种计划类型创建</li>
                    <li className="list-dot">支持 5 种触达通道</li>
                    <li className="list-dot">支持 5 类分群创建方式</li>
                    <li className="list-dot">支持 3 种高级功能</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container lg:py-20">
          <div className="flex flex-col gap-8 main-content-width ">
            <div>
              <div className="mb-2 text-base text-brand_color">产品架构</div>
              <div className="text-4xl font-medium">投放系统的产品架构与优势</div>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">建设更便捷</div>
                <div className="text-base font-normal text-text_color_3">
                  提供标签体系建设模板和标签设计指导，帮助客户将用户数据转化为符合业务需求场景的用户标签，轻松构建标签体系
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">连接更紧密</div>
                <div className="text-base font-normal text-text_color_3">
                  全渠道触达，多策略组合，受众精准筛选，提高运营效率，提升用户体验，让您和用户的连接更紧密
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">分析更轻松</div>
                <div className="text-base font-normal text-text_color_3">
                  提供可视化数据看板功能，用户群体洞察功能，行业分析师咨询服务，既可支持基础数据分析又可满足自助探查分析
                </div>
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
              <div className="mb-2 text-base text-brand_color">场景案例</div>
              <div className="text-4xl font-medium">触发型-完成事件 A ：新人注册福利</div>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:items-center lg:gap-40 lg:flex-row">
              <div className="flex-1">
                <img src="https://pub.lbkrs.com/files/202212/Bow2VnpkGjCanKRE/Frame_427319007.png" alt="" />
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <div className="text-[28px] font-medium">完成新人任务，赢取丰富礼品</div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">活动主题</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">新人任务触达</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">目标受众</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">新注册用户</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">运营策略</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">注册成功提醒和新人大礼包领取提醒</div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="text-base font-medium w-[100px]">活动效果评估</div>
                  <div className="flex-1 text-base font-normal text-text_color_3">
                    任务领取率、任务完成率、任务完成用户7日留存率
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 text-sm text-brand_color">如何实现</div>
              <div className="p-8 rounded-lg bg-bg_color_2">
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div className="flex justify-between flex-1 w-full gap-12">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/zFeewQW7ZHsHffbz/circle_time.png" />
                      <div className="my-3 text-xl font-medium">触发时机</div>
                      <div className="text-base font-normal text-text_color_3">
                        选择计划类型为触发型－完成 X，2021.011.01 16:00 至 2021.12.31 00:00
                        期间当用户完成注册后，对受众用户进行触达
                      </div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/3P85SNLi9ddXX921/me.png" />
                      <div className="my-3 text-xl font-medium">受众用户</div>
                      <div className="text-base font-normal text-text_color_3">满足触发条件的用户（完成注册）</div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-1 w-full gap-12">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/qYTkUnDVQamgWQVm/position.png" />
                      <div className="my-3 text-xl font-medium">触达规则</div>
                      <div className="text-base font-normal text-text_color_3">以 App 推送的方式给用户发送一条提醒</div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.lbkrs.com/files/202212/bRjNqPJ7wb6faVwb/aim.png" />
                      <div className="my-3 text-xl font-medium">触发目标</div>
                      <div className="text-base font-normal text-text_color_3">
                        用户收到推送后，30 分钟内完成新人优惠领取
                      </div>
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

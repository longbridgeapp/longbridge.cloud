import { useTranslation } from 'next-i18next'
import { Block, BlockHeader, BlockBetween, TopBlock } from '@/components/block'
import { TalkToUs } from '@/features/talk-to-us'

export const BG_BANNER = 'https://pub.lbkrs.com/files/202207/g1pGdC8PkwxTaqmw/trading_platform.png'
const IMAGE_URL = 'https://pub.lbkrs.com/files/202207/Ggr6CvK2f2jWASHe/Group_427318855.png'

export const BrokerBanner = () => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('Introducing Broker 一站式解决方案 - FD 客户')}
                desc={i18n.t(
                  '介绍经纪商无需自设经纪系统，即可完成客户开户、交易、计费等全过程，并且可以使用拥有新一代互联网证券交易体验的 LongPort App 及 Whale Trade Terminal 交易员终端。'
                )}
                slogn={i18n.t('面向全披露介绍经纪商的一站式解决方案')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 md:mt-0" alt="" />}
        />
      </Block>
    </TopBlock>
  )
}

export const LongportBanner = () => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('公版 LongPort 一站式解决方案 - Omnibus 客户')}
                desc={i18n.t(
                  '零售经纪商可以通过 SaaS 服务快速搭建完整的证券业务系统，完成开户、交易、风控、出入金、清结算等业务，便捷的管理客户。该方案亦向客户提供拥有新一代互联网证券交易体验的 LongPort App 及 Whale Trade Terminal 交易员终端'
                )}
                slogn={i18n.t('面向中等规模零售经纪商一站式解决方案')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 md:mt-0" alt="" />}
        />
      </Block>
    </TopBlock>
  )
}

export const WhiteLabelBanner = () => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('白标 White Label  一站式解决方案 - Omnibus 客户')}
                desc={i18n.t(
                  '零售经纪商可以通过 SaaS 服务快速搭建完整的证券业务系统，完成开户、交易、风控、出入金、清结算等业务，并且可以通过独立品牌的白标 app 服务最终客户，通过完整的营销系统完成高效的获客及转化'
                )}
                slogn={i18n.t('面向大规模及超大规模零售经纪商一站式解决方案')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 md:mt-0" alt="" />}
        />
      </Block>
    </TopBlock>
  )
}

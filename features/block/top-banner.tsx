import { Block, BlockBetween, BlockHeader, TopBlock } from '@/components/block'
import DivideDot from '@/components/divide-dot'
import { TalkToUs } from '@/features/talk-to-us'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { useTranslation } from 'next-i18next'

export const BG_BANNER = 'https://pub.lbkrs.com/files/202207/g1pGdC8PkwxTaqmw/trading_platform.png'
const IMAGE_URL = 'https://pub.lbkrs.com/files/202207/Ggr6CvK2f2jWASHe/Group_427318855.png'

export const BrokerBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('introducing-broker.page-title')}
                desc={i18n.t('top-banner.broker-desc')}
                slogn={i18n.t('top-banner.broker-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.broker-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const LongportBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('longport.page-title')}
                desc={i18n.t('top-banner.longport-desc')}
                slogn={i18n.t('top-banner.longport-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.longport-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const WhiteLabelBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('white-label.page-title')}
                desc={i18n.t('top-banner.white-label-desc')}
                slogn={i18n.t('top-banner.white-label-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.white-label-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const IndexBanner = () => {
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'
  return (
    <Carousel className="bg-cover" autoplay effect="fade">
      <TopBlock imageUrl={'https://pub.lbkrs.com/files/202307/pTm9TxRfNqszWivn/20230704-180041.jpeg'}>
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-text_color_2 text-3xl mb-3">{i18n.t('features_block_top_banner_891113')}</div>
                <div className="text-white text-[54px] leading-[68px]">
                  <div>{i18n.t('features_block_top_banner_891114')}</div>
                  {!isEn && <div>{i18n.t('features_block_top_banner_891115')}</div>}
                </div>
                <button
                  className="w-[120px] bg-brand_color h-[44px] mt-[32px]"
                  onClick={() => {
                    window.open(
                      'https://mp.weixin.qq.com/s?__biz=Mzg5NDk3OTg0Ng==&mid=2247483698&idx=1&sn=cc8417052ae4a24815bec0726a5a9104&chksm=c0161b5bf761924da8b820d5af7cd32aeda0d74482205c2e91131d4b0811b70efd7728fb3f13#rd',
                      '_blank'
                    )
                  }}
                >
                  <div className="text-white text-lg">{i18n.t('features_block_top_banner_891116')}</div>
                </button>
              </>
            }
            right={<div className="h-[420px] w-[580px]"></div>}
          ></BlockBetween>
        </Block>
      </TopBlock>
      <TopBlock imageUrl={BG_BANNER}>
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-3xl font-medium xl:text-[43px] xl:leading-snug">
                  <span>{i18n.t('home_page_002')}</span>&nbsp;
                  <span className="text-text_brand_color">{i18n.t('home_page_001')}</span>
                </div>
                <DivideDot size="large" />
                <p className="mt-4 text-lg xl:mt-6 xl:text-xl">{i18n.t('home_page_003')}</p>
              </>
            }
            right={
              <div className="h-[420px] w-[580px] flex flex-col justify-center">
                <img
                  src={'https://pub.lbkrs.com/files/202207/yGQxErdGoofNJhoh/header_img.png'}
                  className="mt-5 lg:mt-0"
                  alt={i18n.t('top-banner.broker-title')}
                />
              </div>
            }
          />
        </Block>
      </TopBlock>
    </Carousel>
  )
}

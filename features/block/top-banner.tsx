import { Block, BlockBetween, BlockHeader, TopBlock } from '@/components/block'
import DivideDot from '@/components/divide-dot'
import { TalkToUs } from '@/features/talk-to-us'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { useTranslation } from 'next-i18next'

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
                title={i18n.t('introducing-broker.page-title')}
                desc={i18n.t('top-banner.broker-desc')}
                slogn={i18n.t('top-banner.broker-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.broker-title')} />}
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
                title={i18n.t('longport.page-title')}
                desc={i18n.t('top-banner.longport-desc')}
                slogn={i18n.t('top-banner.longport-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.longport-title')} />}
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
                title={i18n.t('white-label.page-title')}
                desc={i18n.t('top-banner.white-label-desc')}
                slogn={i18n.t('top-banner.white-label-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.white-label-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const IndexBanner = () => {
  const i18n = useTranslation('common')
  return (
    <Carousel className="bg-cover" autoplay style={{ backgroundImage: `url(${BG_BANNER})` }} effect="fade">
      <TopBlock>
        <Block>
          <BlockBetween
            left={
              <>
                <img
                  className="max-w-md max-h-72 lg:max-h-96"
                  src="https://pub.lbkrs.com/static/offline/202212/Rxi8FAiFVPoGmvhG/left.png"
                  alt=""
                />
              </>
            }
            right={
              <img
                src={'https://pub.lbkrs.com/static/offline/202212/gGX2MXNFXP5wabFG/main.png'}
                className="mt-5 lg:mt-0 max-h-80 lg:max-h-96"
                alt={i18n.t('top-banner.broker-title')}
              />
            }
          />
        </Block>
      </TopBlock>
      <TopBlock imageUrl={BG_BANNER}>
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-4xl xl:text-[50px] font-medium">
                  <span>{i18n.t('home_page_002')}</span>&nbsp;
                  <span className="text-text_brand_color">{i18n.t('home_page_001')}</span>
                </div>
                <DivideDot size="large" />
                <p className="mt-6 text-xl">{i18n.t('home_page_003')}</p>
              </>
            }
            right={
              <img
                src={'https://pub.lbkrs.com/files/202207/yGQxErdGoofNJhoh/header_img.png'}
                className="mt-5 lg:mt-0"
                alt={i18n.t('top-banner.broker-title')}
              />
            }
          />
        </Block>
      </TopBlock>
    </Carousel>
  )
}

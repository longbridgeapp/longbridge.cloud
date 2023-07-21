import { Block, BlockBetween, BlockHeader, TopBlock } from '@/components/block'
import DivideDot from '@/components/divide-dot'
import { TalkToUs } from '@/features/talk-to-us'
import { LocaleLink } from '@/components/locale-link'
import Button from '@/components/button'
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
  const bannerMap:any = {
    'en': 'https://pub.lbkrs.com/files/202307/Nk95eVCroahcrRaP/HOME-BANNER-EN.png',
    'zh-CN': 'https://pub.lbkrs.com/files/202307/sJXSzDtouVe9vH3E/HOME-BANNER-CN.png',
    'zh-HK': 'https://pub.lbkrs.com/files/202307/9sSnVNABHuv6VARt/HOME-BANNER-HK.png'
  }
  return (
    <Carousel className="bg-cover" autoplay effect="fade">
      {/* <TopBlock
        imageUrl={'https://pub.lbkrs.com/files/202307/37trM6xxUDNZ5huZ/banner600.png'}
        className="bg-repeat-round"
      >
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-text_color_3_supplement text-3xl mb-3">{i18n.t('features_block_top_banner_891113')}</div>
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
      </TopBlock> */}
      <TopBlock
        imageUrl={'https://assets.lbkrs.com/uploads/e1c18bfe-100d-4870-91dc-915c751edf64/va-banner600.png'}
        className="bg-repeat-round"
      >
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-text_color_3_supplement text-3xl mb-3">{i18n.t('home_top_banner_text_1')}</div>
                <div className="text-white text-[54px] leading-[68px]">
                  <div>{i18n.t('home_top_banner_text_2')}</div>
                </div>
                <LocaleLink className="flex items-center mt-10" to={'/solutions/virtual-assets'}>
                  <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                </LocaleLink>
              </>
            }
            right={<div className="h-[420px] w-[580px]"></div>}
          ></BlockBetween>
        </Block>
      </TopBlock>
      <TopBlock
        imageUrl={'https://assets.lbkrs.com/uploads/89124ed6-e713-44e0-bc93-42acac1a4398/portai-banner600.png'}
        className="bg-repeat-round"
      >
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-text_color_3_supplement text-3xl mb-3 sm:whitespace-nowrap">{i18n.t('pages_locale_product_portai_891115')}</div>
                <div className="text-white text-[48px] leading-[68px] w-auto sm:w-[500px]">
                  <div>{i18n.t('pages_locale_product_portai_891116')}</div>
                </div>
                <LocaleLink className="flex items-center mt-10" to={'/product/portai'}>
                  <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                </LocaleLink>
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
                  <div className="text-text_brand_color">{'Far Beyond'}</div>
                  <span>{i18n.t('features_block_top_banner_891147')}</span>
                </div>
                <p className="mt-4 text-lg xl:mt-6 xl:text-xl">{i18n.t('features_block_top_banner_891148')}</p>
              </>
            }
            right={
              <div className="h-[430px] sm:w-[527px] flex flex-col justify-center">
                <img
                  src={bannerMap[i18n.i18n.language]}
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

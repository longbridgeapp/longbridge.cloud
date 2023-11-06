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
    <Carousel className="bg-cover" effect="fade">
      <TopBlock className="bg-repeat-round bg-[#0B0550] relative">
        <Block>
          <BlockBetween
            left={
              <>
                <div className="mb-3 text-3xl text-left text-text_color_3_supplement">
                  {i18n.t('home_top_banner_text_1')}
                </div>
                <div className="text-white text-[54px] leading-[68px]text-left">
                  <div>{i18n.t('home_top_banner_text_2')}</div>
                </div>
                <LocaleLink className="flex items-center mt-10" to={'/solutions/virtual-assets'}>
                  <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                </LocaleLink>
              </>
            }
            right={
              <div className="h-[430px] sm:w-[527px] flex flex-col justify-center">
                <img
                  src="https://assets.lbkrs.com/uploads/c8bc35cf-c93d-419f-a703-23e1d3cb52dc/va.png"
                  alt="va"
                  className="top-0 bottom-0 object-cover w-auto h-full lg:absolute"
                />
              </div>
            }
          ></BlockBetween>
        </Block>
      </TopBlock>
      <TopBlock className="bg-repeat-round bg-[#0B0550] relative">
        <Block>
          <BlockBetween
            left={
              <>
                <div className="mb-3 text-3xl text-left text-text_color_3_supplement">
                  {i18n.t('pages_locale_product_portai_891115')}
                  <div>{i18n.t('pages_locale_product_portai_891115_1')}</div>
                </div>
                <div className="text-white text-[48px] leading-[68px] text-left">
                  <div>{i18n.t('pages_locale_product_portai_891116')}</div>
                </div>
                <LocaleLink className="flex items-center mt-10" to="/portai">
                  <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                </LocaleLink>
              </>
            }
            right={
              <div className="h-[430px] sm:w-[527px] flex flex-col justify-center">
                <img
                  src="https://assets.lbkrs.com/uploads/c5c9454b-3451-43ab-9466-66e5f7da53ec/ai.png"
                  alt="ai"
                  className="top-0 bottom-0 object-cover w-auto h-full lg:absolute"
                />
              </div>
            }
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

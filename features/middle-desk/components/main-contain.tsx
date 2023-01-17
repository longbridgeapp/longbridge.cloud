import { useTranslation } from 'react-i18next'
import BoxModule from '@/features/common/box-module'
import { BlockBetween } from '@/components/block'
import { TalkToUs } from '@/features/talk-to-us'
import { CDN_IMAGES } from '@/constants'
interface IMainContain {
  title: string
  desc: string
  img: string
}
const MainContain = ({ title, desc, img }: IMainContain) => {
  const i18n = useTranslation('common')
  return (
    <div style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}>
      <BoxModule>
        <BlockBetween
          left={
            <div className="flex flex-col items-start gap-8">
              <div className="text-[44px] font-semibold">{title}</div>
              <div className="text-lg leading-9 text-text_color_1_supplement">{desc}</div>
              <TalkToUs className="mt-0" />
            </div>
          }
          right={<img className="w-[620px] h-[430px]" src={img} alt="" />}
        />
      </BoxModule>
    </div>
  )
}
export default MainContain

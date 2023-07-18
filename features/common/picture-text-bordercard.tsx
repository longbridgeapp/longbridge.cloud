import { useTranslation } from 'next-i18next'
import { TalkToUs } from '@/features/talk-to-us'
interface Iprops {
  item: {title: string; img: string; list: { img?: string; text: string; imgStyle?: Object }[]}
}

const PictureTextBorderCard = ({ item }: Iprops) => {
  const i18n = useTranslation('common')
  
  return (
    <div className="flex flex-col lg:block rounded-md border-border_color border-solid border m-auto">
      <div className="max-w-[588px] rounded-t-lg">
        <img src={item?.img} alt="" />
      </div>
      <div className="max-w-[588px] box-border pt-8 pl-10 pr-10 pb-10">
        <div className="text-[28px] font-medium leading-10 mb-1.5">{item?.title}</div>
        {item?.list &&
          item.list.map((itm: any, idx: number) => {
            return (
              <div className="text-base leading-6 round-dot-list text-text_color_1_supplement mt-2.5" key={idx}>
                {itm.text}
              </div>
            )
          })}
          <TalkToUs className="mt-8" text={i18n.t('features_solutions_info_introduce_891112')} />
      </div>
    </div>
  )
}
export default PictureTextBorderCard

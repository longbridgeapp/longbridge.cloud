import Title from './title'
import BoxModule from './box-module'
import { useTranslation } from 'react-i18next'

const TextPicture = ({ imgUrl, list }: { imgUrl: string; list: string[] }) => {
  const i18n = useTranslation('common')
  return (
    <BoxModule>
      <div className="flex space-x-[50px]">
        <div className="">
          <Title
            label={i18n.t('src_pages_atm_deposit_add_single_index_8634')}
            title={i18n.t('src_pages_atm_deposit_add_single_index_8635')}
          />
          {list &&
            list.map((item, index) => {
              return (
                <div className="dot-list font-base leading-6 text-text_color_1_supplement" key={index}>
                  {item}
                </div>
              )
            })}
        </div>
        <img className="w-[640px]" src={imgUrl} alt="" />
      </div>
    </BoxModule>
  )
}
export default TextPicture

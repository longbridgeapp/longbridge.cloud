import Title from './title'
import BoxModule from './box-module'
const TextPicture = ({ imgUrl, list }: { imgUrl: string; list: string[] }) => {
  return (
    <BoxModule>
      <div className="flex space-x-[50px]">
        <div className="">
          <Title label={'产品优势'} title={'专业、极速、安全'} />
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

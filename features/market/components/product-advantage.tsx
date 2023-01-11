import Title from '@/features/common/title'
import TextPicture from '@/features/common/text-picture'
const ProductAdvantage = () => {
  const productAdvantageText = {
    imgUrl: 'https://pub.lbkrs.com/static/offline/202301/vK7DwUfcXqn8xvqQ/Group_427319325.svg',
    list: [
      '支持全球 200+ 国家地区客户开户，多种身份认证方式，满足不同国家地区合规要求',
      '交易覆盖多市场多品种，提供条件单、附加单等全面的订单交易能力',
      '全面、准确、高效的处理各类证券交易相关的事前、事中、事后风控',
      '分钟级的入金到账及出金到账能力，支付丰富的出入金方式',
    ],
  }
  return (
    <>
      <TextPicture imgUrl={productAdvantageText.imgUrl} list={productAdvantageText.list} />
    </>
  )
}
export default ProductAdvantage

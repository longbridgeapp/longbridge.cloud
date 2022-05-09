import DivideDot from "@/components/divide-dot"
import classNames from "classnames"
import { useTranslation } from "next-i18next"

export const AboutGallery = () => {
  const i18n = useTranslation()

  return (
    <div className="main-container py-[120px]">
      <div className={classNames('main-content-width')}>
        <h3 className="text-4xl">
          <span className="font-bold">{i18n.t('LONGBRIDGE')}</span>
          <span className="font-normal">{i18n.t('Global Office')}</span>
        </h3>
        <div className="mt-8">
          <DivideDot size="large" />
        </div>
        <div className="mt-14">
          <img src="https://pub.lbkrs.com/files/202205/YSbgwc62jxFySVy5/Group_626643.png" alt="" />
        </div>
      </div>
    </div>
  )
}

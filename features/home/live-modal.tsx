import Button from "@/components/button"
import Icon from "@/components/icon"
import classNames from "classnames"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import styles from './live-modal.module.scss'
import { LocaleLink } from "@/components/locale-link"
import { useLive } from "@/hooks/use-live"
import { isServer } from "@/utils/common"

export const LiveModal = () => {
  const [visible, setVisible] = useState(true)
  const i18n = useTranslation('common')
  const { started, ended } = useLive()

  if (!visible || isServer() || ended) {
    return null
  }

  return (
    <div className={classNames(styles['live-modal'], 'fixed right-[10%] bottom-10 w-[80%] md:right-10 md:w-auto rounded-lg z-20')}>
      <div>
        <div className="text-white">
          <h3 className="font-medium text-xl">WHALE</h3>
          <p>{i18n.t('塞德里克福建省地方的思路')}</p>
        </div>
        <div className="bg-white text-white py-5 px-10">
          <LocaleLink to="/live">
            <Button className="w-full">
              <Icon type="play-2" className="mr-2" />
              {started ? i18n.t('现在观看') : i18n.t('立即登记')}
            </Button>
          </LocaleLink>
          
        </div>
      </div>
      <div onClick={() => setVisible(false)} className="absolute cursor-pointer right-4 top-4">
        <Icon type="close" className="text-white" />
      </div>
    </div>
  )
}
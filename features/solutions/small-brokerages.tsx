import DotList from '@/components/dot-list'
import { useTranslation } from 'react-i18next'

export const SmallBrokeragesFeatures = () => {
  const i18n = useTranslation('common')
  const features = [
    {
      label: i18n.t('features_home_data_card_list_891113'),
      title: i18n.t('pages_small_brokerages6'),
      list: [i18n.t('pages_small_brokerages7'), i18n.t('pages_small_brokerages8'), i18n.t('pages_small_brokerages9')],
      icon: '',
    },
    {
      label: i18n.t('pages_small_brokerages10'),
      title: i18n.t('pages_small_brokerages11'),
      list: [
        i18n.t('pages_small_brokerages11'),
        i18n.t('pages_small_brokerages13'),
        i18n.t('pages_small_brokerages14'),
      ],
      icon: '',
    },
    {
      label: i18n.t('pages_small_brokerages15'),
      title: i18n.t('pages_small_brokerages16'),
      list: [
        i18n.t('pages_small_brokerages17'),
        i18n.t('pages_small_brokerages18'),
        i18n.t('pages_small_brokerages19'),
      ],
      icon: '',
    },
  ]
  const notes = [i18n.t('pages_small_brokerages20'), i18n.t('pages_small_brokerages21')]

  return (
    <div>
      <div className="grid gap-x-[30px] gap-y-[30px] md:grid-cols-2 xl:grid-cols-3 mb-8">
        {features.map(feature => {
          return (
            <div key={feature.label} className="rounded-lg border border-solid border-border_color">
              <div className="rounded-t-lg bg-brand_color px-8 py-4 flex items-center justify-between">
                <span className="font-medium text-xl text-white">{feature.label}</span>
                <img src={feature.icon} alt={feature.label} />
              </div>
              <div className="p-8">
                <div className="mb-5 font-semibold text-xl">{feature.title}</div>
                <DotList list={feature.list} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="lg:flex flex-wrap">
        {notes.map(note => {
          return (
            <div key={note} className="mb-4 last:mb-0 lg:mb-0 lg:mr-12 lg:last:mr-0 text-xs text-text_color_2">
              * {note}
            </div>
          )
        })}
      </div>
    </div>
  )
}

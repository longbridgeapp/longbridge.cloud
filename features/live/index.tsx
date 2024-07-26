import Header from '@/features/header'
import { LiveForm } from './form'
import { LiveVideo } from './video'
import styles from './live.module.scss'
import { useTranslation } from 'next-i18next'
import DivideDot from '@/components/divide-dot'
import { FC, useMemo } from 'react'
import Footer from '../footer'
import classNames from 'classnames'

type IAgendaProps = {
  content: string
  icon: string
}
function useAgendas(): IAgendaProps[] {
  const i18n = useTranslation('common')

  return useMemo(() => {
    return [
      {
        content: i18n.t('live_index_004'),
        icon: 'https://pub.pbkrs.com/files/202205/ZbHvsYTuz69qULDK/live_home.png',
      },
      {
        content: i18n.t('live_index_008'),
        icon: 'https://pub.pbkrs.com/files/202205/KGLZ6id8wdWBWHwj/stock.png',
      },
      {
        content: i18n.t('live_index_035'),
        icon: 'https://pub.pbkrs.com/files/202205/49Bgxj45qsgtHMV2/quote.png',
      },
      {
        content: i18n.t('live_index_010'),
        icon: 'https://pub.pbkrs.com/files/202205/hfwcRkwpkWsgKYiH/encyclopedia.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const Agenda: FC<
  IAgendaProps & {
    showLine: boolean
  }
> = ({ content, icon, showLine }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center agenda-item">
        <div>
          <img className="w-12" src={icon} alt="" />
        </div>
        <div className="mt-10 flex items-center justify-center h-[2em] text-2xl font-medium">{content}</div>
      </div>
      {showLine && (
        <div className="mx-4 w-14">
          <img src="https://pub.pbkrs.com/files/202205/qPh3hGsxawvM2FQe/Vector_276.png" alt="" />
        </div>
      )}
    </>
  )
}

function useGuests() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        name: i18n.t('live_index_013'),
        sex: i18n.t('live_index_002'),
        position: i18n.t('live_index_014'),
      },
      {
        name: i18n.t('live_index_015'),
        sex: i18n.t('live_index_002'),
        position: i18n.t('live_index_016'),
      },
      {
        name: i18n.t('live_index_005_1'),
        sex: i18n.t('live_index_007'),
        position: i18n.t('live_index_017'),
      },
      {
        name: i18n.t('live_index_018'),
        sex: i18n.t('live_index_002'),
        position: i18n.t('live_index_019'),
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
const Guests = () => {
  const guests = useGuests()
  const i18n = useTranslation('common')

  return (
    <div className={styles.guests}>
      <div className="main-container">
        <div className="main-content-width">
          <h3 className="text-4xl font-bold">{i18n.t('live_index_024')}</h3>
          <div className="mt-7">
            <DivideDot size="large" />
          </div>
          <div className="flex flex-wrap justify-between guest-list mt-7">
            {guests.map(({ name, sex, position }) => {
              return (
                <div className="guest-item flex mb-10 w-[45%] xl:w-[22%]" key={name}>
                  <div className="flex-1 p-10 bg-white">
                    <div className="font-bold pb-5 mb-5 border-b-[1px] border-dashed">
                      <span className="text-3xl">{name}</span>
                      <span className="ml-2 text-lg">{sex}</span>
                    </div>
                    <div className="text-lg position-text text-text_color_2">
                      <span>{position}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const Detail = () => {
  const i18n = useTranslation('common')
  const agendas = useAgendas()
  return (
    <div className={styles.detail}>
      <div className="main-container">
        <div className="main-content-width">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-4xl font-bold">{i18n.t('live_video_005_1')}</h3>
              <div className="mt-7">
                <DivideDot size="large" />
              </div>
              <div className="desc">
                <p>{i18n.t('live_index_020')}</p>
                <p>{i18n.t('live_index_021')}</p>
                <p>{i18n.t('live_index_022')}</p>
              </div>
            </div>
            <div className="flex-1 ml-10">
              <img src="https://pub.pbkrs.com/files/202205/nRzqH899MYacvpDP/Group_627269.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const AgendaList = () => {
  const i18n = useTranslation('common')
  const agendas = useAgendas()
  return (
    <div className={classNames(styles['agenda-list'], 'bg-bg_color_1')}>
      <div className="main-container">
        <div className="main-content-width py-[120px]">
        <h4 className="text-2xl font-medium">{i18n.t('live_index_023')}</h4>
            <div className="flex items-center justify-between mt-10 agenda-list">
              {agendas.map((item, index) => {
                return <Agenda showLine={index !== agendas.length - 1} {...item} key={item.content} />
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

const Live = () => {
  return (
    <div className={styles['live-page']}>
      <div className={styles.live}>
        <div className="section-content-container">
          <Header />
          <div className="pt-10 pb-20 main-container">
            <div className="main-content-width">
              <div className="flex flex-col justify-between md:flex-row">
                <div className="flex-[2]">
                  <LiveVideo />
                </div>
                <div className="flex-1 mt-10 md:ml-7 md:mt-0">
                  <LiveForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Detail />
      <AgendaList />
      {false && <Guests />}
      <Footer />
    </div>
  )
}

export default Live

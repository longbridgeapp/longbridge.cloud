import Header from '@/features/header'
import { LiveForm } from './form'
import { LiveVideo } from './video'
import styles from './live.module.scss'
import { useTranslation } from 'next-i18next'
import DivideDot from '@/components/divide-dot'
import { FC, useMemo } from 'react'
import Footer from '../footer'

type IAgendaProps = {
  content: string
  participants: {
    position: string
    name: string
  }[]
}
function useAgendas(): IAgendaProps[] {
  const i18n = useTranslation('common')

  return useMemo(() => {
    return [
      {
        content: i18n.t('live_index_004'),
        participants: [
          {
            position: i18n.t('live_index_003'),
            name: i18n.t('live_index_001'),
          },
        ],
      },
      {
        content: i18n.t('live_index_008'),
        participants: [
          {
            position: i18n.t('live_index_006'),
            name: i18n.t('live_index_005'),
          },
        ],
      },
      {
        content: i18n.t('live_index_035'),
        participants: [
          {
            position: i18n.t('live_index_036'),
            name: i18n.t('live_index_037'),
          },
          {
            position: i18n.t('live_index_038'),
            name: i18n.t('live_index_039'),
          },
        ],
      },
      {
        content: i18n.t('live_index_010'),

        participants: [
          {
            position: i18n.t('live_index_003'),
            name: i18n.t('live_index_040'),
          },
        ],
      },
      {
        content: i18n.t('live_index_012'),
        participants: [
          {
            position: '',
            name: i18n.t('live_index_041'),
          },
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const Agenda: FC<
  IAgendaProps & {
    showLine: boolean
  }
> = ({ content, participants, showLine }) => {
  return (
    <>
      <div className="agenda-item flex flex-col justify-center items-center text-center">
        <div className="flex items-center justify-center h-[2em] text-2xl font-medium">{content}</div>
        {participants.map(({ name, position }) => {
          return (
            <div key={name} className="mt-5">
              {name && (
                <div>
                  <span className="text-xl whitespace-nowrap">{name}</span>
                </div>
              )}
              <div className="position">{position}</div>
            </div>
          )
        })}
      </div>
      {showLine && (
        <div className="w-10 mx-4 text-2xl h-[2em] flex flex-col justify-center items-center">
          <div className="border-black  w-full border-b-[1px] border-dashed"></div>
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
          <h3 className="font-bold text-4xl">{i18n.t('live_index_024')}</h3>
          <div className="mt-7">
            <DivideDot size="large" />
          </div>
          <div className="guest-list flex justify-between flex-wrap mt-7">
            {guests.map(({ name, sex, position }) => {
              return (
                <div className="guest-item flex mb-10 w-[45%] xl:w-[22%]" key={name}>
                  <div className="bg-white flex-1 p-10">
                    <div className="font-bold pb-5 mb-5 border-b-[1px] border-dashed">
                      <span className="text-3xl">{name}</span>
                      <span className="text-lg ml-2">{sex}</span>
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
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-bold text-4xl">{i18n.t('live_video_005')}</h3>
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
              <img src="https://pub.lbkrs.com/files/202205/nRzqH899MYacvpDP/Group_627269.png" alt="" />
            </div>
          </div>
          <div className="mt-[60px]">
            <h4 className="font-medium text-2xl">{i18n.t('live_index_023')}</h4>
            <div className="agenda-list flex justify-between items-start mt-7">
              {agendas.map((item, index) => {
                return <Agenda showLine={index !== agendas.length - 1} {...item} key={item.content} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Live = () => {
  return (
    <div>
      <div className={styles.live}>
        <div className="section-content-container">
          <Header />
          <div className="main-container pb-20 pt-10">
            <div className="main-content-width">
              <div className="flex justify-between">
                <div className="flex-[2]">
                  <LiveVideo />
                </div>
                <div className="ml-7 flex-1">
                  <LiveForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Detail />
      <Guests />
      <Footer />
    </div>
  )
}

export default Live

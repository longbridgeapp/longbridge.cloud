import Icon from '@/components/icon'
import { useLive } from '@/hooks/use-live'
import { fillZero } from '@/utils/common'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import styles from './video.module.scss'

export const LiveVideo = () => {
  const i18n = useTranslation('common')

  const { startCountDown, started, ended, succeed } = useLive()
  const { days, hours, minutes, seconds } = startCountDown
  const videoRef = useRef<HTMLVideoElement>(null)
  const [player, setPlayer] = useState<any>(null)

  useEffect(() => {
    if (!player && videoRef.current) {
      const player = videojs(videoRef.current!, {
        controls: true,
        controlBar: {
          volumePanel: true,
          remainingTimeDisplay: false,
          progressControl: false,
          fullscreenToggle: true,
          audioTrackButton: false,
          playToggle: true,
          liveDisplay: true,
          pictureInPictureToggle: false,
        },
        sources: [
          {
            src: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
            type: 'video/mp4',
          },
        ],
      })
      setPlayer(player)
    }
  }, [started, ended])

  return (
    <div className={styles.video}>
      <div className="top">
        {(!started || ended || !succeed) && (
          <>
            <div className="flex flex-col justify-center items-center">
              <img className="w-[73px]" src="https://pub.lbkrs.com/files/202205/17ffUtUkXgorB2EU/Frame.png" alt="" />
              <div className="mt-14 text-center">
                {ended
                  ? i18n.t('直播已结束，请联络 xxx 观看回放')
                  : succeed
                  ? i18n.t('请等待直播开始')
                  : i18n.t('请您预先登记，以观看直播视频')}
              </div>
            </div>
            {!started && (
              <div className="countdown">
                <span>{i18n.t('直播倒计时')}</span>
                <div className="flex items-center ml-3">
                  <span className="number">{fillZero(days)}</span>
                  <span>{i18n.t('天')}</span>
                  <span className="number">{fillZero(hours)}</span>:<span className="number">{fillZero(minutes)}</span>:
                  <span className="number">{fillZero(seconds)}</span>
                </div>
              </div>
            )}
          </>
        )}
        {started && !ended && succeed && (
          <div className="video-box w-full h-full flex-1 flex flex-col">
            <video ref={videoRef} className="video-js vjs-big-play-centered"></video>
          </div>
        )}
      </div>
      <div className="bg-white px-7 py-6">
        <h3 className="font-medium text-2xl">{i18n.t('LONGBRIDGE WHALE 品牌发布暨研讨会')}</h3>
        <h4 className="font-medium text-lg mt-2">{i18n.t("数字券商 向云而生 Let's Go Cloud！")}</h4>
        <div className="flex items-center text-sm mt-4">
          <Icon type="circle_time" className="mr-2" />
          <span>2020.05.27 | 10:00-11:30 (UTC+8)</span>
        </div>
      </div>
    </div>
  )
}

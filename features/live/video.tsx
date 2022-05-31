import Icon from '@/components/icon'
import { useLive } from '@/hooks/use-live'
import { fillZero, isServer } from '@/utils/common'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import styles from './video.module.scss'

export const LiveVideo = () => {
  const i18n = useTranslation('common')

  const { startCountDown, started, ended, succeed, liveInfo } = useLive()
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
          children: [
            {
              name: 'playToggle',
            },
            {
              name: 'volumePanel',
            },
            {
              name: 'liveDisplay',
            },
            {
              name: 'fullscreenToggle',
            },
          ],
        },
        sources: [
          // {
          //   src: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
          //   type: 'video/mp4',
          // },
          {
            src: liveInfo.m3u8_live_url,
            type: 'application/x-mpegURL',
          },
        ],
      })
      setPlayer(player)
    } else if (player) {
      player.src([
        {
          src: liveInfo.m3u8_live_url,
          type: 'application/x-mpegURL',
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, ended, liveInfo.m3u8_live_url])
  if (isServer()) {
    return null
  }
  const liveInfoLoaded = !!liveInfo.m3u8_live_url
  return (
    <div className={styles.video}>
        <div className="top">
          {(liveInfoLoaded && !started || ended) && (
            <>
              <div className="absolute flex flex-col items-center justify-center -translate-y-1/2 top-1/2">
                <img className="w-[73px]" src="https://pub.lbkrs.com/files/202205/17ffUtUkXgorB2EU/Frame.png" alt="" />
                <div className="text-center mt-14">
                  {ended ? i18n.t('live_video_001') : succeed ? i18n.t('live_video_002') : i18n.t('live_video_003')}
                </div>
              </div>
              {!started && (
                <div className="countdown">
                  <span>{i18n.t('live_video_006')}</span>
                  <div className="flex items-center ml-3">
                    <span className="number">{fillZero(days)}</span>
                    <span>{i18n.t('live_video_007')}</span>
                    <span className="number">{fillZero(hours)}</span>:
                    <span className="number">{fillZero(minutes)}</span>:
                    <span className="number">{fillZero(seconds)}</span>
                  </div>
                </div>
              )}
            </>
          )}
          {liveInfoLoaded && started && !ended && (
            <div className="absolute inset-0 flex flex-col flex-1 w-full h-full video-box">
              <video ref={videoRef} className="video-js vjs-big-play-centered"></video>
            </div>
          )}
        </div>

      <div className="py-6 bg-white px-7">
        <h3 className="text-2xl font-medium">{i18n.t('live_video_004')}</h3>
        <h4 className="mt-2 text-lg font-medium">{i18n.t('live_video_005')}</h4>
        <div className="flex items-center mt-4 text-sm">
          <Icon type="circle_time" className="mr-2" />
          <span>2022.05.31 | 14:00-15:00 (UTC+8)</span>
        </div>
      </div>
    </div>
  )
}

import { SUCCEED_KEY } from '@/constants'
import { useCountDown, useLocalStorageState } from 'ahooks'
import { getLiveInfo, ILiveInfo, LIVE_STATUS, getAppConfig } from '@/services'
import { useEffect, useRef } from 'react'
import { createAState } from './create-a-state'

const useApplySucceed = createAState()
const useLiveInfo = createAState()
const useLiveID = createAState()

let updateLIveInfoTimer: any
const updateLIveInfoSubscribes: any[] = []

let featchLiveIDLocker = false

/** 获取直播信息的 hook，用到 succeed 字段的组件需要 client only，否则会出错 */
export function useLive() {
  const [succeed, setSucceed] = useLocalStorageState(SUCCEED_KEY)
  const [syncSucceed, setSyncSucceed] = useApplySucceed(succeed)
  const [liveID, setLiveID] = useLiveID('')
  const [liveInfo, setLiveInfo] = useLiveInfo<ILiveInfo>({
    m3u8_live_url: '',
    replay_url: '',
    started_at: Date.now() + 30 * 1000,
    status: LIVE_STATUS.booking,
  })
  // 因为使用了 useCountDown，所以这里的结果会实时更新
  const started = liveInfo.status === LIVE_STATUS.online || Date.now() >= liveInfo.started_at
  const liveEndMs = Number(liveInfo.started_at) + 2 * 60 * 60 * 1000
  const ended = liveInfo.status === LIVE_STATUS.ended || Date.now() >= liveEndMs
  const [, startCountDown] = useCountDown({
    targetDate: new Date(liveInfo.started_at),
  })
  const liveInfoRef = useRef(liveInfo)
  liveInfoRef.current = liveInfo
  const updateLIveInfo = async () => {
    const { live } = await getLiveInfo(liveID)
    live.started_at = Number(live.started_at) * 1000
    if (
      !liveInfoRef.current.m3u8_live_url ||
      liveInfoRef.current.status !== live.status ||
      liveInfoRef.current.m3u8_live_url !== live.m3u8_live_url
    ) {
      setLiveInfo(live)
    }
  }

  useEffect(() => {
    if (!featchLiveIDLocker) {
      const key = 'longbridge_cloud_live'
      getAppConfig([key]).then(res => {
        const liveID = res?.config?.[key]?.live_id || ''
        setLiveID(liveID)
      })
      featchLiveIDLocker = true
    }
  }, [])

  useEffect(() => {
    if (!featchLiveIDLocker || !liveID) return
    if (!updateLIveInfoTimer) {
      updateLIveInfo()
      updateLIveInfoTimer = setInterval(updateLIveInfo, 10 * 1000)
    }
    updateLIveInfoSubscribes.push(1)
    return () => {
      updateLIveInfoSubscribes.pop()
      if (updateLIveInfoSubscribes.length === 0) {
        clearInterval(updateLIveInfoTimer)
        updateLIveInfoTimer = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveID])

  return {
    started,
    ended,
    succeed: syncSucceed,
    setSucceed: (val: any) => {
      setSucceed(val)
      setSyncSucceed(val)
    },
    startCountDown,
    liveInfo,
  }
}

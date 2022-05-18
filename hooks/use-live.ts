import { SUCCEED_KEY, STARTED_SUCCEED_KEY } from '@/constants'
import { useCountDown, useLocalStorageState, useMount } from 'ahooks'
import { getLiveInfo, ILiveInfo, LIVE_STATUS } from '@/services'
import { useRef, useState } from 'react'

/** 获取直播信息的 hook，用到 succeed 字段的组件需要 client only，否则会出错 */
export function useLive() {
  const [succeed, setSucceed] = useLocalStorageState(SUCCEED_KEY)
  const [startedSucceed, setStartedSucceed] = useLocalStorageState(STARTED_SUCCEED_KEY)
  const [liveInfo, setLiveInfo] = useState<ILiveInfo>({
    m3u8_live_url: '',
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
    const { data: { live } } = await getLiveInfo()
    live.started_at = Number(live.started_at) * 1000
    if (!liveInfoRef.current.m3u8_live_url || liveInfoRef.current.status !== live.status) {
      setLiveInfo(live)
    }
  }
  useMount(() => {
    updateLIveInfo()
    setInterval(updateLIveInfo, 10 * 1000)
  })

  return {
    started,
    ended,
    startedSucceed,
    setStartedSucceed,
    succeed,
    setSucceed,
    startCountDown,
    liveInfo,
  }
}
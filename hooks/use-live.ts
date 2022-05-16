import { LIVE_END_MS, LIVE_START_MS, SUCCEED_KEY } from '@/constants'
import { useCountDown, useLocalStorageState } from 'ahooks'

/** 获取直播信息的 hook */
export function useLive() {
  const [succeed, setSucceed] = useLocalStorageState(SUCCEED_KEY)
  // 因为使用了 useCountDown，所以这里的结果会实时更新
  const started = Date.now() >= LIVE_START_MS
  const ended = Date.now() >= LIVE_END_MS
  const [, startCountDown] = useCountDown({
    targetDate: new Date(LIVE_START_MS),
  })
  useCountDown({
    targetDate: new Date(LIVE_END_MS),
  })
  return {
    started,
    ended,
    succeed,
    setSucceed,
    startCountDown
  }
}
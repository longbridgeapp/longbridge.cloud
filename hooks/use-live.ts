import { LIVE_END_MS, LIVE_START_MS, SUCCEED_KEY } from '@/constants'
import { useCountDown, useLocalStorageState } from 'ahooks'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

/** 获取直播信息的 hook */
export function useLive() {
  const i18n = useTranslation('common')
  const [succeed, setSucceed] = useLocalStorageState(SUCCEED_KEY)
  // 因为使用了 useCountDown，所以这里的结果会实时更新
  const started = Date.now() >= LIVE_START_MS
  const ended = Date.now() >= LIVE_END_MS
  const [, startCountDown] = useCountDown({
    targetDate: new Date(LIVE_START_MS),
  })
  return {
    started,
    ended,
    succeed,
    setSucceed,
    startCountDown
  }
}
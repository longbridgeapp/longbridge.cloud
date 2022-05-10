import { isServer } from '@/utils/common'
import { useDebounceFn, useSafeState } from 'ahooks'
import { useEffect } from 'react'

export function useResize() {
  const [width, setWidth] = useSafeState(isServer() ? 1920 : window.innerWidth)
  const [height, setHeight] = useSafeState(isServer() ? 1080 : window.innerHeight)
  const { run: handleResize } = useDebounceFn(
    () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    },
    {
      wait: 300,
    }
  )
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [width, height]
}

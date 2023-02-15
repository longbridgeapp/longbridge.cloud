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

/** 动态计算同层级的卡片内部分栏高度，保持统一 */
export function keepSiblingsHeight(wrapperClass: string, className: string) {
  const dom = document.querySelector(`${wrapperClass}`)
  let maxHeight = 0
  dom?.querySelectorAll(`.${className}`).forEach(d => {
    const _dom = d as HTMLElement
    _dom.style.height = ''
    maxHeight = Math.max(maxHeight, _dom.offsetHeight)
  })
  if (maxHeight > 0) {
    dom?.querySelectorAll(`.${className}`).forEach(d => {
      const _dom = d as HTMLElement
      _dom.style.height = `${maxHeight}px`
    })
  }
}

import { getPurePath } from '@/utils/common'
import { useLocation } from 'react-router-dom'

export function usePurePathname() {
  const { pathname } = useLocation()
  return getPurePath(pathname)
}

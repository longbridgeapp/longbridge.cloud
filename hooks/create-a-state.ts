import { useEffect, useState } from "react"

const target = {

} as Record<string, any[]>

/** 在多个 hook 里保持同一个 state */
export function createAState() {
  const key = Math.random()
  function useAState<T>(val: T) {
    const [state, setState] = useState<T>(val)
    const setAState = (newVal: T) => {
      setState(newVal)
      if (target[key]) {
        target[key].forEach(fn => {
          if (fn !== setAState) {
            fn(newVal)
          }
        })
      }
    }
    useEffect(() => {
      if (!target[key]) {
        target[key] = []
      }
      target[key].push(setAState)
      console.log(target[key])
      return () => {
        delete target[key]
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return [state, setAState] as const
  }

  return useAState
}


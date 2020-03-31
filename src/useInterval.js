import { useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick(id) {
      savedCallback.current(id)
    }

    if (delay !== null) {
      const id = setInterval(() => tick(id), delay)
      return () => clearInterval(id)
    }

    return undefined
  }, [delay])
}

export default useInterval

import { useEffect, useState } from 'react'
import { Box } from '../../../styled-system/jsx'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
      setSeconds(elapsedTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box>
      <h1>{seconds}</h1>
    </Box>
  )
}

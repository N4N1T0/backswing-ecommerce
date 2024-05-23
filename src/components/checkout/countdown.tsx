'use client'

import { useEffect, useState } from 'react'

const CountDown = () => {
	const [minutes, setMinutes] = useState(5)
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (minutes === 0 && seconds === 0) {
				clearInterval(intervalId)
			} else {
				if (seconds === 0) {
					setMinutes(minutes - 1)
					setSeconds(59)
				} else {
					setSeconds(seconds - 1)
				}
			}
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [minutes, seconds])

	return (
		<span className='text-lg text-red-500 font-semibold'>
			Tiempo restante: {minutes}:{seconds.toString().padStart(2, '0')}
		</span>
	)
}

export default CountDown

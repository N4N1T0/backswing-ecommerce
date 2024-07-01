'use client'

// React Imports
import { useEffect, useState } from 'react'

/**
 * Renders a countdown component that displays the remaining time in minutes and seconds.
 *
 * @return {JSX.Element} The rendered countdown component.
 */
const CountDown = (): JSX.Element => {
	// State variables to hold the minutes and seconds remaining
	const [minutes, setMinutes] = useState(5)
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		// Set up an interval to decrement the minutes and seconds every second
		const intervalId = setInterval(() => {
			// If all time has expired, clear the interval
			if (minutes === 0 && seconds === 0) {
				clearInterval(intervalId)
			} else {
				// If seconds have reached 0, decrement minutes and reset seconds
				if (seconds === 0) {
					setMinutes(minutes - 1)
					setSeconds(59)
				} else {
					// Otherwise, just decrement seconds
					setSeconds(seconds - 1)
				}
			}
		}, 1000)

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId)
		}
	}, [minutes, seconds])

	// Render the countdown as a string in the format "minutes:seconds"
	return (
		<span className='text-lg text-red-500 font-semibold'>
			Tiempo restante: {minutes}:{seconds.toString().padStart(2, '0')}
		</span>
	)
}

export default CountDown

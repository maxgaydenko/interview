export const timeString = (date: Date): string => {
	const hours = `${date.getHours()}`.padStart(2, '0')
	const minutes = `${date.getMinutes()}`.padStart(2, '0')
	const seconds = `${date.getSeconds()}`.padStart(2, '0')
	const milliSeconds = `${date.getMilliseconds()}`.padStart(3, '0')
	return `${[hours, minutes, seconds].join(':')}.${milliSeconds}`
}

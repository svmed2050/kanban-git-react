export function daysConverter(created_at) {
	const createdDate = new Date(created_at)
	const currentDate = new Date()
	const diffInMs = currentDate - createdDate
	// convert the difference to days
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
	return diffInDays + (diffInDays === 1 ? ` day ago` : ` days ago`)
}

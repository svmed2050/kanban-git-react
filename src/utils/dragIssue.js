export function dragIssue(getState, result) {
	const data = getState().issues.data

	const { source, destination } = result

	const sourceColIndex = data.findIndex((e) => e.id === source.droppableId)
	const destinationColIndex = data.findIndex(
		(e) => e.id === destination.droppableId
	)

	const sourceCol = data[sourceColIndex]
	const destinationCol = data[destinationColIndex]

	const sourceTask = [...sourceCol.issues]
	const destinationTask = [...destinationCol.issues]

	const [removed] = sourceTask.splice(source.index, 1)
	destinationTask.splice(destination.index, 0, removed)

	data[sourceColIndex].issues = sourceTask
	data[destinationColIndex].issues = destinationTask

	return data
}

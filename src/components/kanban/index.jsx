import './kanban.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import { useState, useEffect } from 'react'
import Card from '../card'
import { useSelector } from 'react-redux'

const Kanban = () => {
	const issues = useSelector((state) => state.issues)
	const [data, setData] = useState(mockData)

	useEffect(() => {
		if (JSON.stringify(issues.todo) === '{}') return
		setData([{ ...issues.todo }, { ...issues.inprogress }, { ...issues.done }])
	}, [issues])

	const onDragEnd = (result) => {
		if (data.length === 0) return

		if (!result.destination) return
		const { source, destination } = result

		if (source.droppableId !== destination.droppableId) {
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

			setData(data)
		}
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className='kanban__title-container'>
				{data.length &&
					data.map((section) => (
						<div key={section.id} className='kanban__title-container__title'>
							{section.title}
						</div>
					))}
			</div>

			<div className='kanban'>
				{data.length &&
					data.map((section) => (
						<Droppable key={section.id} droppableId={section.id}>
							{(provided) => (
								<div
									{...provided.droppableProps}
									className='kanban__section'
									ref={provided.innerRef}
								>
									<div className='kanban__section__content'>
										{section.issues.map((task, index) => (
											<Draggable
												key={task.id}
												draggableId={task.id}
												index={index}
											>
												{(provided, snapshot) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														style={{
															...provided.draggableProps.style,
															opacity: snapshot.isDragging ? '0.5' : '1',
														}}
													>
														<Card {...task} />
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								</div>
							)}
						</Droppable>
					))}
			</div>
		</DragDropContext>
	)
}

export default Kanban

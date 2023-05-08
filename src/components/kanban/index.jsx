import './kanban.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Card from '../card'
import { useSelector, useDispatch } from 'react-redux'
import { dragActions } from '../../actions/dragActions'

const Kanban = () => {
	const dispatch = useDispatch()
	let { data } = useSelector((state) => state.issues)

	const onDragEnd = (result) => {
		if (!result.destination) return

		const { source, destination } = result

		if (source.droppableId !== destination.droppableId) {
			dispatch(dragActions(result))
		}
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className='kanban__title-container'>
				{data &&
					data.map((section) => (
						<div key={section.id} className='kanban__title-container__title'>
							{section.title}
						</div>
					))}
			</div>

			<div className='kanban'>
				{data &&
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

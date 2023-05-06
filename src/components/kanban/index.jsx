import React, { useState } from 'react'
import './kanban.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData.js'
import Card from '../card'

const Kanban = () => {
	const [data, setData] = useState(mockData)

	const onDragEnd = (result) => {
		console.log(result)
	}

	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='kanban'>
					{data.map((section) => (
						<Droppable key={section.id} droppableId={section.id}>
							{(provided) => (
								<div
									{...provided.droppableProps}
									className='kanban__section'
									ref={provided.innerRef}
								>
									<div className='kanban__section__title'>{section.title}</div>
									<div className='kanban__section__content'>
										{section.tasks.map((task, index) => (
											<Card>{task.title}</Card>
										))}
									</div>
								</div>
							)}
						</Droppable>
					))}
				</div>
			</DragDropContext>
		</div>
	)
}

export default Kanban

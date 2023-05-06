import './kanban.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData.js'

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
						<Droppable></Droppable>
					))}
				</div>
			</DragDropContext>
		</div>
	)
}

export default Kanban

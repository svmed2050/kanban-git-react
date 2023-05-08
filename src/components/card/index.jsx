import './card.scss'
import { daysConverter } from '../../utils/daysConverter.js'

const Card = (props) => {
	const { title, comments, number, created_at, user } = props
	const daysAgo = daysConverter(created_at)

	return (
		<div className='card'>
			<strong>{title}</strong>
			<p>
				#{number} {props.closed ? 'closed' : 'opened'} {daysAgo}
			</p>
			<p>
				{user} | Comments: {comments}
			</p>
		</div>
	)
}

export default Card

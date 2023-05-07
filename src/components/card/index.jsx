import './card.scss'
import { daysConverter } from '../../utils/daysConverter.js'

const Card = ({ title, comments, number, created_at, user }) => {
	const daysAgo = daysConverter(created_at)

	return (
		<div className='card'>
			<strong>{title}</strong>
			<p>
				#{number} opened {daysAgo}
			</p>
			<p>
				{user} | Comments: {comments}
			</p>
		</div>
	)
}

export default Card

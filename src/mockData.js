import { v4 as uuidv4 } from 'uuid'

/* 
		Some issue title
		#315 opened 3 days ago
		Admin | Comments: 3

		dataOpen[0].title
		dataOpen[0].comments
		dataOpen[0].number
		dataOpen[0].created_at
		dataOpen[0].user.login
		*/

const mockData = [
	{
		id: uuidv4(),
		title: ' 📃 ToDo',
		tasks: [
			{
				id: uuidv4(),
				title: 'Add support for onScrollEnd event',
				comments: 1,
				number: 26789,
				created_at: '2023-05-07T05:48:43Z',
				user: 'devongovett',
			},
			// {
			// 	id: uuidv4(),
			// 	title: 'Learn Git',
			// },
			// {
			// 	id: uuidv4(),
			// 	title: 'Learn Python',
			// },
		],
	},
	{
		id: uuidv4(),
		title: ' ✏️ In Progress',
		tasks: [
			// {
			// 	id: uuidv4(),
			// 	title: 'Learn CSS',
			// },
			// {
			// 	id: uuidv4(),
			// 	title: 'Learn Golang',
			// },
		],
	},
	{
		id: uuidv4(),
		title: ' ✔️ Done',
		tasks: [
			// {
			// 	id: uuidv4(),
			// 	title: 'Learn HTML',
			// },
		],
	},
]

export default mockData

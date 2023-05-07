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
		issues: [
			{
				// id: uuidv4(),
				id: '123123123',
				title: 'Enter GitHub repo URL to fetch the Data',
				comments: 1,
				number: 11111,
				created_at: '2023-05-07T05:48:43Z',
				user: 'Pavel Sergienko',
			},
		],
	},
	{
		id: uuidv4(),
		title: ' ✏️ In Progress',
		issues: [],
	},
	{
		id: uuidv4(),
		title: ' ✔️ Done',
		issues: [],
	},
]

export default mockData

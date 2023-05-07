import { v4 as uuidv4 } from 'uuid'

export function dataFilter(data) {
	const newData = [
		{
			id: uuidv4(),
			title: ' 📃 ToDo',
			issues: data[0].map((el) => ({
				id: el.id.toString(),
				title: el.title,
				comments: el.comments,
				number: el.number,
				created_at: el.created_at,
				user: el.user.login,
			})),
		},
		{
			id: uuidv4(),
			title: ' ✏️ In Progress',
			issues: data[1].map((el) => ({
				id: el.id.toString(),
				title: el.title,
				comments: el.comments,
				number: el.number,
				created_at: el.created_at,
				user: el.user.login,
			})),
		},
		{
			id: uuidv4(),
			title: ' ✔️ Done',
			issues: data[2].map((el) => ({
				id: el.id.toString(),
				title: el.title,
				comments: el.comments,
				number: el.number,
				created_at: el.updated_at,
				user: el.user.login,
			})),
		},
	]

	return newData
}

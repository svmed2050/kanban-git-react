import React, { useState, useEffect } from 'react'
import RepoStars from '../repostars/index'
import { issuesAction } from '../../actions/issuesActions'

import { useDispatch, useSelector } from 'react-redux'

import './repoinput.scss'

const RepoInput = () => {
	const dispatch = useDispatch()
	// const issues = useSelector((state) => state.issues)
	// const { loading, error, todo, inprogress, done } = issues
	// console.log('todo', todo)
	// console.log('inprogress', inprogress)
	// console.log('done', done)

	const [repoUrl, setRepoUrl] = useState('')
	const [gitStars, setGitStars] = useState(0)
	const [newOwner, setNewOwner] = useState('')
	const [newRepoName, setNewRepoName] = useState('')

	const handleRepoLoad = async () => {
		if (!repoUrl) return
		const urlParts = repoUrl.split('/')
		if (urlParts.length < 4) return

		setNewOwner(urlParts[3])
		setNewRepoName(urlParts[4])
	}

	// useEffect(() => {
	// 	if (!newRepoName || !newOwner) return
	// 	console.log('fetching')

	// 	async function fetchData() {
	// 		const baseUrl = `https://api.github.com/repos/${newOwner}/${newRepoName}/issues?sort=created&direction=desc&per_page=4`
	// 		const urlOpen = `${baseUrl}&state=open`
	// 		const urlAssignee = `${baseUrl}&state=open&assignee=*`
	// 		const urlClosed = `${baseUrl}&state=closed`
	// 		const urlGitStars = `https://api.github.com/repos/${newOwner}/${newRepoName}`

	// 		const urls = [urlOpen, urlAssignee, urlClosed]

	// 		try {
	// 			setIsLoading(true)
	// 			// const data = await Promise.all(
	// 			// 	urls.map(async (url) => {
	// 			// 		const resp = await fetch(url)
	// 			// 		return resp.json()
	// 			// 	})
	// 			// )
	// 			// setIssues({ open: data[0], inProgress: data[1], done: data[2] })

	// 			const responseOpen = await fetch(urlOpen)
	// 			const dataOpen = await responseOpen.json()
	// 			setIssues((prevState) => ({ ...prevState, open: dataOpen }))

	// 			// console.log(dataOpen[0].title)
	// 			// console.log(dataOpen[0].comments)
	// 			// console.log(dataOpen[0].number)
	// 			// console.log(dataOpen[0].created_at)
	// 			// console.log(dataOpen[0].user.login)

	// 			/* Fetching stars */
	// 			// const responseStars = await fetch(urlGitStars)
	// 			// const starsNewData = await responseStars.json()
	// 			// setGitStars(starsNewData.stargazers_count)
	// 			setIsLoading(false)
	// 		} catch (error) {
	// 			console.log(error)
	// 			setIsLoading(false)
	// 		}
	// 	}

	// 	fetchData()

	// 	/*
	// 	Some issue title
	// 	#315 opened 3 days ago
	// 	Admin | Comments: 3
	// 	*/
	// }, [newRepoName, newOwner])

	useEffect(() => {
		if (!newRepoName || !newOwner) return
		console.log('fetching')
		dispatch(issuesAction(newOwner, newRepoName))
	}, [dispatch, newOwner, newRepoName])

	return (
		<>
			<div className='input-wrapper'>
				<input
					placeholder='Enter GitHub repo URL'
					value={repoUrl}
					onChange={(event) => setRepoUrl(event.target.value)}
					type='text'
					className='input-style'
				/>
				<button className='button' onClick={handleRepoLoad}>
					Load issues
				</button>
			</div>

			{newOwner && newRepoName && (
				<RepoStars
					newOwner={newOwner}
					newRepoName={newRepoName}
					gitStars={gitStars}
				/>
			)}
		</>
	)
}

export default RepoInput

import React, { useState, useEffect } from 'react'
import RepoStars from '../repostars/index'

import './repoinput.scss'

const RepoInput = () => {
	const [repoUrl, setRepoUrl] = useState('')
	const [issues, setIssues] = useState({ open: [], inProgress: [], done: [] })
	const [gitStars, setGitStars] = useState(0)
	const [newOwner, setNewOwner] = useState('')
	const [newRepoName, setNewRepoName] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleRepoLoad = async () => {
		if (!repoUrl) return
		const urlParts = repoUrl.split('/')
		if (urlParts.length < 4) return

		setNewOwner(urlParts[3])
		setNewRepoName(urlParts[4])
	}

	useEffect(() => {
		if (!newRepoName || !newOwner) return
		console.log('fetching')

		async function fetchData() {
			const baseUrl = `https://api.github.com/repos/${newOwner}/${newRepoName}/issues?sort=created&direction=desc&per_page=4`
			const urlOpen = `${baseUrl}&state=open`
			const urlAssignee = `${baseUrl}&state=open&assignee=*`
			const urlClosed = `${baseUrl}&state=closed`
			const urlGitStars = `https://api.github.com/repos/${newOwner}/${newRepoName}`

			const urls = [urlOpen, urlAssignee, urlClosed]

			try {
				setIsLoading(true)
				// const data = await Promise.all(
				// 	urls.map(async (url) => {
				// 		const resp = await fetch(url)
				// 		return resp.json()
				// 	})
				// )
				// setIssues({ open: data[0], inProgress: data[1], done: data[2] })
				const responseStars = await fetch(urlGitStars)
				const starsNewData = await responseStars.json()
				setGitStars(starsNewData.stargazers_count)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchData()
	}, [newRepoName, newOwner])

	return (
		<>
			<div className='input-wrapper'>
				<input
					value={repoUrl}
					onChange={(event) => setRepoUrl(event.target.value)}
					type='text'
					className='input-style'
				/>
				<button className='button' onClick={handleRepoLoad}>
					Load issues
				</button>
			</div>

			{newOwner && newRepoName && !isLoading && (
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

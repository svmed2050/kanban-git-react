import React, { useState, useEffect } from 'react'
import RepoStars from '../repostars/index'

import './repoinput.scss'

const RepoInput = () => {
	const [repoUrl, setRepoUrl] = useState('')
	const [issues, setIssues] = useState({ open: [], inProgress: [], done: [] })
	const [gitStars, setGitStars] = useState(206957)
	const [newOwner, setNewOwner] = useState('Facebook')
	const [newRepoName, setNewRepoName] = useState('React')

	const handleRepoLoad = async () => {
		if (!repoUrl) return
		const urlParts = repoUrl.split('/')
		if (urlParts.length < 4) return

		setNewOwner(urlParts[3])
		setNewRepoName(urlParts[4])
		const baseUrl = `https://api.github.com/repos/${newOwner}/${newRepoName}/issues?sort=created&direction=desc&per_page=4`

		const urlOpen = `${baseUrl}&state=open`
		const urlAssignee = `${baseUrl}&state=open&assignee=*`
		const urlClosed = `${baseUrl}&state=closed`
		const urls = [urlOpen, urlAssignee, urlClosed]

		const urlGitStars = `https://api.github.com/repos/${newOwner}/${newRepoName}`

		try {
			// const data = await Promise.all(
			// 	urls.map(async (url) => {
			// 		const resp = await fetch(url)
			// 		return resp.json()
			// 	})
			// )
			// setIssues({ open: data[0], inProgress: data[1], done: data[2] })
			// const responseStars = await fetch(urlGitStars)
			// const starsNewData = await responseStars.json()
			// setGitStars(starsNewData.stargazers_count)
			// console.log(starsNewData.stargazers_count) // 206957
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		console.log(issues)
		console.log(gitStars)
	}, [issues, gitStars])

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
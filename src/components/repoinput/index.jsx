import React, { useState, useEffect } from 'react'
import './repoinput.scss'

const RepoInput = () => {
	const [repoUrl, setRepoUrl] = useState('')
	const [issues, setIssues] = useState({ open: [], inProgress: [], done: [] })

	const handleRepoLoad = async () => {
		if (!repoUrl) return
		const urlParts = repoUrl.split('/')
		if (urlParts.length < 4) return

		const newOwner = urlParts[3]
		const newRepoName = urlParts[4]
		const baseUrl = `https://api.github.com/repos/${newOwner}/${newRepoName}/issues?sort=created&direction=desc&per_page=4`

		const urlOpen = `${baseUrl}&state=open`
		const urlAssignee = `${baseUrl}&state=open&assignee=*`
		const urlClosed = `${baseUrl}&state=closed`
		const urls = [urlOpen, urlAssignee, urlClosed]

		try {
			const data = await Promise.all(
				urls.map(async (url) => {
					const resp = await fetch(url)
					return resp.json()
				})
			)
			setIssues({ open: data[0], inProgress: data[1], done: data[2] })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		console.log(issues)
	}, [issues])

	return (
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
	)
}

export default RepoInput

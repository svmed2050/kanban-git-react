import React, { useState, useEffect } from 'react'
import RepoStars from '../repostars/index'
import { issuesAction } from '../../actions/issuesActions'
import { starsAction } from '../../actions/starsActions'

import { useDispatch } from 'react-redux'

import './repoinput.scss'

const RepoInput = () => {
	const dispatch = useDispatch()
	const [repoUrl, setRepoUrl] = useState('')
	const [newOwner, setNewOwner] = useState('')
	const [newRepoName, setNewRepoName] = useState('')

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
		dispatch(issuesAction(newOwner, newRepoName))
		dispatch(starsAction(newOwner, newRepoName))
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

			<RepoStars />

			{/* {newOwner && newRepoName && (
				<RepoStars newOwner={newOwner} newRepoName={newRepoName} />
			)} */}
		</>
	)
}

export default RepoInput

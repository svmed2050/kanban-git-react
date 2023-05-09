import React from 'react'
import { useSelector } from 'react-redux'
import star from '../../icons/star-svgrepo-com.svg'
import './repostars.scss'

const RepoStars = () => {
	const { stars, loading } = useSelector((state) => state.stars)
	const { stars: gitStars, newOwner, newRepoName } = stars || {}

	console.log(stars)

	if (!newOwner) return

	return (
		<div className='stars-wrapper'>
			<p>
				<a
					href={`https://github.com/${newOwner}`}
					target='_blank'
					rel='noreferrer'
					className='zoom'
				>
					{newOwner[0].toUpperCase() + newOwner.slice(1, newOwner.length)}
				</a>{' '}
				&gt;{' '}
				<a
					href={`https://github.com/${newOwner}/${newRepoName}`}
					target='_blank'
					rel='noreferrer'
					className='zoom'
				>
					{newRepoName[0].toUpperCase() +
						newRepoName.slice(1, newRepoName.length)}
				</a>
			</p>
			<span>
				<img
					className='stars-wrapper__img'
					src={star}
					alt='Star'
					width='20px'
				/>
				<span className='stars-wrapper__quantity'>
					{!loading && gitStars >= 1000
						? `${(gitStars / 1000).toFixed()}K`
						: gitStars}{' '}
					stars
				</span>
			</span>
		</div>
	)
}

export default RepoStars

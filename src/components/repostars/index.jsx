import React from 'react'
import star from '../../icons/star-svgrepo-com.svg'
import './repostars.scss'

const RepoStars = ({ newOwner, newRepoName, gitStars }) => {
	return (
		<div className='stars-wrapper'>
			<p>
				{newOwner} &gt; {newRepoName}{' '}
			</p>
			<span>
				<img
					className='stars-wrapper__img'
					src={star}
					alt='Star'
					width='20px'
				/>
				<span className='stars-wrapper__quantity'>
					{gitStars >= 1000 ? `${(gitStars / 1000).toFixed()}K` : gitStars}{' '}
					stars
				</span>
			</span>
		</div>
	)
}

export default RepoStars

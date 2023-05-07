import React from 'react'
import star from '../../icons/star-svgrepo-com.svg'

const RepoStars = ({ newOwner, newRepoName, gitStars }) => {
	return (
		<div>
			<p>
				{newOwner} &gt; {newRepoName}{' '}
			</p>
			<span>
				<img src={star} alt='Star' width='20px' />
				<span>
					{gitStars >= 1000 ? `${(gitStars / 1000).toFixed()}K` : gitStars}{' '}
					stars
				</span>
			</span>
		</div>
	)
}

export default RepoStars

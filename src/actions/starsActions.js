import axios from 'axios'
import {
	STARS_FAIL,
	STARS_REQUEST,
	STARS_SUCCESS,
} from '../constants/starsConstants'

export const starsAction = (newOwner, newRepoName) => async (dispatch) => {
	try {
		dispatch({ type: STARS_REQUEST })

		const urlGitStars = `https://api.github.com/repos/${newOwner}/${newRepoName}`

		const { data } = await axios.get(urlGitStars)

		const newData = {
			newOwner,
			newRepoName,
			stars: data.stargazers_count,
		}

		localStorage.setItem('gitStars', JSON.stringify(newData))

		dispatch({ type: STARS_SUCCESS, payload: newData })
	} catch (error) {
		dispatch({
			type: STARS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

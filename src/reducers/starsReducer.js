import {
	STARS_FAIL,
	STARS_REQUEST,
	STARS_SUCCESS,
} from '../constants/starsConstants'

export const starsReducer = (state = {}, action) => {
	switch (action.type) {
		case STARS_REQUEST:
			return { loading: true }
		case STARS_SUCCESS:
			return { loading: false, stars: action.payload }
		case STARS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

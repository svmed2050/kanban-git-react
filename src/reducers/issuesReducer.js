import {
	ISSUES_FAIL,
	ISSUES_REQUEST,
	ISSUES_SUCCESS,
} from '../constants/issuesConstants'

export const issuesReducer = (
	state = { todo: {}, inprogress: {}, done: {} },
	action
) => {
	switch (action.type) {
		case ISSUES_REQUEST:
			return { loading: true, todo: {}, inprogress: {}, done: {} }
		case ISSUES_SUCCESS:
			return {
				loading: false,
				todo: action.payload[0],
				inprogress: action.payload[1],
				done: action.payload[2],
			}
		case ISSUES_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

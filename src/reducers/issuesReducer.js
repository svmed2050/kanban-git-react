import {
	ISSUES_FAIL,
	ISSUES_REQUEST,
	ISSUES_SUCCESS,
} from '../constants/issuesConstants'
import { DRAG_ISSUE } from '../constants/dragConstants'

export const issuesReducer = (state = {}, action) => {
	switch (action.type) {
		case ISSUES_REQUEST:
			return { loading: true }
		case ISSUES_SUCCESS:
			return {
				loading: false,
				data: action.payload,
			}
		case ISSUES_FAIL:
			return { loading: false, error: action.payload }
		case DRAG_ISSUE:
			return { loading: false, data: action.payload }
		default:
			return state
	}
}

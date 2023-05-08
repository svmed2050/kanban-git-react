import { DRAG_ISSUE } from '../constants/dragConstants'
import { dragIssue } from '../utils/dragIssue'

export const dragActions = (result) => (dispatch, getState) => {
	const data = dragIssue(getState, result)

	localStorage.setItem('gitIssues', JSON.stringify(data))

	dispatch({ type: DRAG_ISSUE, payload: data })
}

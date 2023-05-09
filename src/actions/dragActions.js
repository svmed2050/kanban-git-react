import { DRAG_ISSUE } from '../constants/dragConstants'
import { dragIssue } from '../utils/dragIssue'
import { saveIssues } from '../utils/saveIssues'

export const dragActions = (result) => (dispatch, getState) => {
	const data = dragIssue(getState, result)

	const newOwner = getState().stars.stars.newOwner
	const newRepoName = getState().stars.stars.newRepoName

	saveIssues(newOwner, newRepoName, data)

	dispatch({ type: DRAG_ISSUE, payload: data })
}

export const openIssuesReducer = (state = { open: [] }, action) => {
	switch (action.type) {
		case 'OPEN_ISSUES_REQUEST':
			return { loading: true, open: [] }
		case 'OPEN_ISSUES_SUCCESS':
			return { loading: false, open: action.payload }
		case 'OPEN_ISSUES_FAIL':
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

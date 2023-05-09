import axios from 'axios'
import {
	ISSUES_FAIL,
	ISSUES_REQUEST,
	ISSUES_SUCCESS,
} from '../constants/issuesConstants'
import { dataFilter } from '../utils/dataFilter'
import { saveIssues } from '../utils/saveIssues'

export const issuesAction = (newOwner, newRepoName) => async (dispatch) => {
	try {
		dispatch({ type: ISSUES_REQUEST })

		const baseUrl = `https://api.github.com/repos/${newOwner}/${newRepoName}/issues?sort=created&direction=desc&per_page=4`
		const urlOpen = `${baseUrl}&state=open`
		const urlAssignee = `${baseUrl}&state=open&assignee=*`
		const urlClosed = `${baseUrl}&state=closed`
		const urls = [urlOpen, urlAssignee, urlClosed]

		const data = await Promise.all(
			urls.map(async (url) => {
				const resp = await axios.get(url)
				return resp.data
			})
		)

		const filteredData = dataFilter(data)

		saveIssues(newOwner, newRepoName, filteredData)

		dispatch({ type: ISSUES_SUCCESS, payload: filteredData })
	} catch (error) {
		dispatch({
			type: ISSUES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export function saveIssues(newOwner, newRepoName, filteredData) {
	const dataFromStorage = JSON.parse(localStorage.getItem('reposInStorage'))

	const propertyName = `${newOwner}/${newRepoName}`

	const newObjData = {
		reposData: {
			...(dataFromStorage?.reposData || {}),
			[propertyName]: {
				issues: filteredData,
			},
		},
		lastRepo: propertyName,
	}

	localStorage.setItem('reposInStorage', JSON.stringify(newObjData))
}

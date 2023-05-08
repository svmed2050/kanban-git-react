import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { issuesReducer } from './reducers/issuesReducer'
import { starsReducer } from './reducers/starsReducer'
import mockData from './mockData.js'

const reducer = combineReducers({
	issues: issuesReducer,
	stars: starsReducer,
})

const middleware = [thunk]
const composeEnhancers = composeWithDevTools({})

const issuesFromStorage = localStorage.getItem('gitIssues')
	? JSON.parse(localStorage.getItem('gitIssues'))
	: mockData

const starsFromStorage = localStorage.getItem('gitStars')
	? JSON.parse(localStorage.getItem('gitStars'))
	: {}

const initialState = {
	issues: {
		data: issuesFromStorage,
		loading: false,
	},
	stars: {
		stars: starsFromStorage,
		loading: false,
	},
}

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store

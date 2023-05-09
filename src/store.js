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

	/*
	1. Мы делаем fetch на gitHub API
	и получаем оттуда данные

	2. Эти данные мы сохраняем по ключу
	'reposInStorage' в объекте, где название
	данного свойства это строка 'owner/repo'

	3. Далее, когда мы делаем fetch запрос,
	то мы должны достать данные из localStorage
	и проверить есть ли там уже такое свойство.
	
	а) если есть, то просто достать данные оттуда

	b) если нет, то сделать новый fetch запрос
	и сохранить данные в localStorage
	


	reposInStorage: {
		'facebook/react': {

		}
		'svmed2050/kanban': {

		}
	}
	
	*/
}

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store

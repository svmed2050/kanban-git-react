import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { issuesReducer } from './reducers/issuesReducer'

const reducer = combineReducers({
	issues: issuesReducer,
})

const initialState = {}

const middleware = [thunk]

const composeEnhancers = composeWithDevTools({
	// Specify here name, actionsDenylist, actionsCreators and other options
})

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store

import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const middleware = [thunk]

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default Store;
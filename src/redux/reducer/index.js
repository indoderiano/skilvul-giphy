import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import GifsReducer from './GifsReducer'

let reducer = combineReducers({
    gifs: GifsReducer
})

let store = createStore(reducer, {}, applyMiddleware( thunk ) )

export default store
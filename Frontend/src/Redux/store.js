import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todosReducers } from './reducer/todoReducer';
import { tabReducer } from './reducer/tabReducer';
const reducer=combineReducers({
    todos:todosReducers,
    currentTab:tabReducer
})
const middleware=[thunk];
const store=createStore(
reducer,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
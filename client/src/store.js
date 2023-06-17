import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllMealsReducer } from "./reducers/mealsReducers";

const finalReducer = combineReducers({
    getAllMealsReducer: getAllMealsReducer
})
const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllMealsReducer } from "./reducers/mealsReducers";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
    getAllMealsReducer: getAllMealsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer
})

const cartItems = localStorage.getItem("cartItems") ?JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    cartReducer : {
        cartItems : cartItems
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
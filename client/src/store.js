import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllMealsReducer } from "./reducers/mealsReducers";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer, getUserOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllMealsReducer: getAllMealsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrderReducer: getUserOrderReducer
})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const currentUser = localStorage.getItem("currentUser") ?JSON.parse(localStorage.getItem("currentUser")): null

const initialState = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllMealsReducer } from "./reducers/mealsReducers";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/userReducer";
import { placeOrderReducer, getUserOrdersReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllMealsReducer: getAllMealsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer
})

const cartItems = localStorage.getItem("cartItems") ?JSON.parse(localStorage.getItem("cartItems")) : []

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
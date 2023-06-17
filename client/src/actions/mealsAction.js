import axios from "axios";
export const getAllMeals =()=>dispatch=>{
    dispatch({type:"GET_MEALS_REQUEST"})
    try{
        const response = axios.get("/api/meals/getmeals")
        console.log(response);
        dispatch({type:"GET_MEALS_SUCCESS", payload: response.data})
    } catch(error){
        dispatch({type:"GET_MEALS_FAILED", payload: error})
    }
}
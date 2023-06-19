import axios from "axios";
export const getAllMeals =()=>async dispatch=>{
    dispatch({type:"GET_MEALS_REQUEST"})

    try{
        const response = await axios.get("/api/meals/getallmeals")
        console.log(response);
        dispatch({type:"GET_MEALS_SUCCESS", payload: response.data})
    } catch(error){
        dispatch({type:"GET_MEALS_FAILED", payload: error})
    }
}
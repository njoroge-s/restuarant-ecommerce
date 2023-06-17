export const getAllMealsReducer = (state={}, action) =>{
    switch(action.type)
    {
        case "GET_MEALS_REQUEST": return{
            ...state
        }
        case "GET_MEALS_SUCCESS": return{
            meals : action.payload
        }
        case "GET_MEALS_FAILED": return{
            error : action.payload
        }
        default : return state
    }
}
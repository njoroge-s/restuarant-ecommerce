export const getAllMealsReducer = (state={meals : []}, action) =>{
    switch(action.type)
    {
        case "GET_MEALS_REQUEST": return{
            loading: true,
            ...state
        }
        case "GET_MEALS_SUCCESS": return{
            loading: false,
            meals : action.payload
        }
        case "GET_MEALS_FAILED": return{
            error : action.payload,
            loading: false
        }
        default : return state
    }
}
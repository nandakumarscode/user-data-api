import {GET_User_API_Success, DELETE_API_Success} from './actions'
const initialState = {
    users: []
 }
const userReducer = (state = {users:[]}, action ) =>{
    switch(action.type){
        case GET_User_API_Success:
            return {...state, users: action.users}
         case DELETE_API_Success:
            const newState = state.filter(uid => uid.id !== action.id); // Use filter method to remoreove the item that has been deleted from the st
            return newState;
        default:
            return state;
    }
} 

export default userReducer;
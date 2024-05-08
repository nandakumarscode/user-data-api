export const GET_User_Fetch = 'GET_User_Fetch';
export const GET_User_API_Success = 'GET_User_API_Success';
export const DELETE_API_Success = 'DELETE_API_Success';


export const getUserFetch = ()=>({
    type: GET_User_Fetch
}); 
export const deleteUser = (id)=>({
    type: DELETE_API_Success,
    id
}); 
import { takeEvery, call, put } from "redux-saga/effects";
import {GET_User_Fetch, GET_User_API_Success, DELETE_API_Success} from './actions'

function userFetch(){
    return fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());
}
function* deleteUserAPI (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }
function* workGetUserFetch(){
    const users = yield call(userFetch);
    yield put({type:GET_User_API_Success, users});
}
function* workGetUserDelete(){
    const users = yield call(userFetch);
    yield put({type:GET_User_API_Success, users});
}
function* userSaga(){
yield takeEvery(GET_User_Fetch, workGetUserDelete);
yield takeEvery(DELETE_API_Success, workGetUserDelete);
}

export default userSaga;
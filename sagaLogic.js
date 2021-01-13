 import { takeEvery,put, call,all, fork } from "redux-saga/effects";
import {requestUsersResponse,usersPostResponse,deleteUserResponse} from './sagaActions'
import  axios  from 'axios';

//-----------get--------------

const userData=()=>{
 // console.log('hi')
  return  axios.get('http://localhost:3000/users')
}

function* fetchusersAsync() {
 const data= yield call(userData)
  yield put(requestUsersResponse(data))
  // if we dont take (data property from array ) in reducer --->>>action.payload.data we have to pas it here
 // yield put(requestUsersResponse(data.data))
 // console.log('data',data)
}

//---------------post----------------
const postData=(data)=>{
  
   return  axios.post('http://localhost:3000/users', data )
 }

function* postUsersAsync(action){

//  console.log('saga action',action)

  const data= yield call(postData ,action.payload)
   yield put(usersPostResponse(data.data))
 //  console.log('post -saga logic data',data.data)

}
//---------------delete----------------
const deleteData=(id)=>{
  console.log('axios dataaa id value',id);
 

  console.log('url','http://localhost:3000/users/'+id);
  return  axios.delete('http://localhost:3000/users/'+id )
}

function* deleteUser(action){
  console.log('saga delete user action.id',action.id);
  console.log('saga delete data action.data',action.allusersdata);

const y= yield call(deleteData ,action.id)


console.log('y',y)

const index= action.allusersdata.findIndex(x=>x.id === action.id);

action.allusersdata.splice(index,1)
 if(index !==-1)

   yield put(deleteUserResponse(action.allusersdata))
   console.log('put data',action.allusersdata);
  // console.log(('data const',data));
  
}

//------------------Edit-------------
const editApi=(data)=>{
  
  return  axios.post('http://localhost:3000/users', data )
}

function* eidtUser(action){

  const data= yield call(editApi ,action.id)
  yield put(usersPostResponse(data.data))


}

//--------------get by id--------------
/* const fetUserbyId=(id)=>{
  // console.log('hi')
   return  axios.get(`http://localhost:3000/users/${id}`)
 }

 function* getUserById(action){

  const data= yield call(fetUserbyId ,action.payload)
   yield put(getUserByIdResponse(data.data))
 

} */

export function* watchFetchUsers() {
  yield takeEvery("REQUEST_USERS_DATA", fetchusersAsync);
  yield takeEvery("USERS_POST_REQUEST", postUsersAsync);
  yield takeEvery("DELETE_USER_REQUEST", deleteUser);


  //yield takeEvery("REQUEST_USER_BYID", getUserById);

}
 
function* mainSaga() {
  yield all([fork(watchFetchUsers)]);
}

export default mainSaga
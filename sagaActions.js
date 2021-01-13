import {
  REQUEST_USERS_RESPONSE,
  REQUEST_USERS_DATA,
  USERS_POST_REQUEST,
  USERS_POST_RESPONSE,
  REQUEST_USER_BYID,
  RESPONSE_OF_USER_BYID,
  DELETE_USER_REQUEST,
  DELETE_USER_RESPONSE,
  EDIT_USER_REQUEST,
  EDIT_USER_RESPONSE
} from "./sagaTypes";

export const requestUsers = () => {
  return {
    type: REQUEST_USERS_DATA,
  };
};
export const requestUsersResponse = (data) => {
  return {
    type: REQUEST_USERS_RESPONSE,
    payload: data,
  };
};
export const usersPostRequest = (action) => {
 
  return {
    type: USERS_POST_REQUEST,
    payload: action,
  };
};
export const usersPostResponse = (data) => {
  console.log("action response", data);

  return {
    type: USERS_POST_RESPONSE,
    payload: data,
  };
};

export const deleteUserRequest = (id,allusersdata) => {
    
  console.log('delete action data',id,allusersdata);
    return {
      type: DELETE_USER_REQUEST,
      id,
      allusersdata
    };
  };
  export const deleteUserResponse = (data) => {
      return {
      type: DELETE_USER_RESPONSE,
      data
    };
  };


  export const edituserRequest = (id,newedit) => {
   return {
      type: EDIT_USER_REQUEST,
    id,
    newedit
    };
  };
  export const edituserResponse = (id,newdata) => {
    return {
      type: EDIT_USER_RESPONSE,
      id,
      newdata
    };
  };


// export const requestUserbyId = (data) => {
      
//     return {
//       type: REQUEST_USER_BYID,
//       payload: data,
//     };
//   };
//   export const getUserByIdResponse = (data) => {
   
//     return {
//       type: RESPONSE_OF_USER_BYID,
//       payload: data,
//     };
//   };

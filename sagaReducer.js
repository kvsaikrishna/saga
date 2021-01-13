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

const initialState = {};

const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case REQUEST_USERS_DATA:
      return { ...state };

    case REQUEST_USERS_RESPONSE:
    //  console.log(" action.payload", action.payload);
      return { ...state, usersdata: action.payload.data };

    case USERS_POST_REQUEST:
      return { ...state };

    case USERS_POST_RESPONSE:
  //    console.log(" action.payload", action.payload);
      return { ...state, postdata: action.payload.data };

       case DELETE_USER_REQUEST:
   //   console.log(" delete user request", action.id, action.allusersdata);
   
       return { ...state, id:action.id, usersdata:action.allusersdata };

      case DELETE_USER_RESPONSE:
    //   console.log(" action.payload response", action.data);
        return { ...state, usersdata: action.allusersdata };


        case EDIT_USER_REQUEST:
   
       return { ...state };

      case EDIT_USER_RESPONSE:
    
        return { ...state };
  


      // case REQUEST_USER_BYID:
     
      //   return { ...state };

      //   case RESPONSE_OF_USER_BYID:
         
      //     return { ...state, dataByID: action.payload.data };

    default:
      return state;
  }
};
export default sagaReducer;

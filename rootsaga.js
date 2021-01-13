import mainSaga from '../Redux/saga/sagaLogic'
import PostUserSaga from '../Redux/sagaPost/sagaPostLogic'
import {all} from "redux-saga/effects";


export default function* rootsaga(){
    yield all([
        mainSaga(),
        PostUserSaga()
    ])
}
import { combineReducers } from 'redux';
import MobileReducer from './mobile/MobileReducer'
import LaptopReducer from './laptop/LaptopReducer';
import HeadsetReducer from './Headset/HeadsetReducer'
import UsersReducer from './Users/UsersReducer'
import crudReducer from './CRUD/crudReducers'
import movieReducer from './Movie/moviereducers'
import todosReducer from './Todo/TodoReducer'
import sampleCRUDReducer from './sampleCRUD/ReducerCRUD'
import sagaReducer from '../Redux/saga/sagaReducer'
import sagaPostReducer from '../Redux/sagaPost/sagaPostReducer'

const rootReducer= combineReducers({
    Mobile: MobileReducer,
    Laptop: LaptopReducer,
    Headset: HeadsetReducer,
    Users:UsersReducer,
    CRUD: crudReducer,
    movies:movieReducer,
    todos:todosReducer,
    sampleCRUDReducer: sampleCRUDReducer,
    sagaReducer:sagaReducer,
   // sagaPostReducer:sagaPostReducer
})

export default rootReducer


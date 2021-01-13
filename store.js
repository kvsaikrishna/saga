import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import thunk  from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
//import rootsaga from '../saga/saga'



import rootsaga from '../Redux/rootsaga'

const sagaMiddleware =createSagaMiddleware() 


const store = createStore(rootReducer,applyMiddleware(thunk,sagaMiddleware))

sagaMiddleware.run(rootsaga)

export default store

import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import appReducer from './Reducer.js';

const reducer = combineReducers({
  routing: routerReducer,
  NewOrders: appReducer
});

const store = createStore(reducer);

export default store;
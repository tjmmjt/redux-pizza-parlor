import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const customerInfo = (state = {}, action) => {
  return state;
}

const cart = (state = [], action) => {
  if(action.type === 'ADD_TO_CART'){
  return [...state, action.payload]
  }
  return state
}

const store = createStore(
  combineReducers({
    customerInfo,
    cart // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;

import { createStore, combineReducers } from 'redux';
import { userReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;

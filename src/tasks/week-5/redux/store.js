import { createStore, combineReducers } from 'redux';
import petShopReducer from './reducers/pet_shop';
import cartReducer from './reducers/cart';

const appReducers = combineReducers({
    products: petShopReducer,
    cart: cartReducer
});
const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
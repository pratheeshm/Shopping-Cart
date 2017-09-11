import {combineReducers} from 'redux';
import Items from './shop-items.js';
import cartItems from './cart-items';
const allReducers=combineReducers({
    Items:Items,
    cartItems:cartItems});

export default allReducers;
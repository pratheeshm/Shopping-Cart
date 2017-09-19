import {combineReducers} from 'redux';
import Items from './shop-items.js';
import cartItems from './cart-items';
import TotalPrice from './total';
const allReducers=combineReducers({
    Items:Items,
    cartItems:cartItems,
    TotalPrice:TotalPrice

});

export default allReducers;
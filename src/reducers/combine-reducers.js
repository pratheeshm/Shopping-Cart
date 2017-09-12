import {combineReducers} from 'redux';
import Items from './shop-items.js';
import cartItems from './cart-items';
import TotalPrice from './total';
import PriceRange from './price-min-max'; 
const allReducers=combineReducers({
    Items:Items,
    cartItems:cartItems,
    TotalPrice:TotalPrice,
    PriceRange

});

export default allReducers;
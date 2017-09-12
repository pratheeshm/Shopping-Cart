import React, { Component } from 'react';
import '../App.css';
import ItemList from '../containers/item-list'
import CartList from '../containers/cart-list';
import PriceFilter from '../containers/price-filter';
class App extends Component {
    render() {
        return (
            <div>
            <PriceFilter/>
            <h1>ITEMS</h1>
            <ItemList/>
            <h1>CART</h1>
            <CartList/>
            
            </div>
             
        );
    }
}

export default App;
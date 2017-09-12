import React, { Component } from 'react';
import '../index.css';
import ItemList from '../containers/item-list'
import CartList from '../containers/cart-list';
import PriceFilter from '../containers/price-filter';
class App extends Component {
    render() {
        return (
            <div>
            <PriceFilter/>
            <h2>ITEMS</h2>
            <ItemList/>
            <h2>YOUR   CART</h2>
            <CartList/>
            
            </div>
             
        );
    }
}

export default App;
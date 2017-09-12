import React,{Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './checkout';
class CartList extends Component{
    getItems() {
        if(this.props.items.length===0){
            return <div>Select an Item</div>
        }
        return this.props.items.map((item)=>{return(<li>
                <div>{item.name}</div>
                <div>Rs: {item.price}</div>
                <div>{item.quantity} Nos</div>
            </li>)});
    }
    render(){
        return(
            <div>
            <ul>{this.getItems()}
            </ul>
            <Checkout items={this.props.items}/>
            
        </div>);
    }

 
}
function mapStateToProps(state) {
    return{
        items:state.cartItems
    }
}
export default connect(mapStateToProps)(CartList);
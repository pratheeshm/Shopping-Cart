import React,{Component} from 'react';
import {connect} from 'react-redux';
class CartList extends Component{
    getItems() {
        if(this.props.items.arr.length===0){
            return <div>Select an Item</div>
        }
        return this.props.items.arr.map((item)=>{return(<li>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </li>)});
    }
    render(){
        return(<ul>{this.getItems()}
            </ul>);
    }

 
}
function mapStateToProps(state) {
    return{
        items:state.cartItems
    }
}
export default connect(mapStateToProps)(CartList);
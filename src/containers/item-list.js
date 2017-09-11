import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddToCart from './add-to-cart'; 
class ItemList extends Component{
    getItems() {
        return this.props.items.map((item)=>{return(<li key={item.id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <AddToCart item={item}/>
            </li>)});
    }
    render(){
        return(<ul>{this.getItems()}
            </ul>);
    }

 
}
function mapStateToProps(state) {
    return{
        items:state.Items    
    }
}
export default connect(mapStateToProps)(ItemList);
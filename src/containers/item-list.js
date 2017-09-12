import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddToCart from './add-to-cart'; 
class ItemList extends Component{
   
    getItems() {
        return this.props.items.map((item)=>{
            if(item.price<=this.props.PriceRange.max&&item.price>=this.props.PriceRange.min)
            return(<li key={item.id} className="collection-item">
                <div className="teal-text text-darken-4">{item.name}</div>
                <div>
                <div className="teal-text text-darken-4">Rs:{item.price}</div>
                </div>
                <AddToCart item={item} />
            </li>)
        });
    }
    render(){
        return(<ul className="collection">{this.getItems()}
            </ul>);
    }

 
}
function mapStateToProps(state) {
    return{
        items:state.Items,
        PriceRange:state.PriceRange    
    }
}
export default connect(mapStateToProps)(ItemList);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddToCart from './add-to-cart'; 
import fetchGet from '../actions/fetch-get'
import axios from 'axios';

class ItemList extends Component{
   
    getItems() {
        return this.props.items.map((item)=>{
            return(<li key={item.productID} className="collection-item">
                <div className="teal-text text-darken-4">{item.name}</div>
                <div>
                <div className="teal-text text-darken-4">Rs:{item.price}</div>
                </div>
                <AddToCart item={item} />
            </li>)
        });
    }
    componentWillMount() {
        this.props.dispatch1();
    }
    render(){
        return(<ul className="collection">{this.getItems()}
            </ul>);
    }

 
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            axios.get("http://10.4.6.34:4000/productListing")
            .then(function(res){
                dispatch(fetchGet(res.data.result))
            })
            .catch(function(err){
                console.log(err);
            });
        }
    }
}
function mapStateToProps(state) {
    return{
        items:state.Items,
        PriceRange:state.PriceRange    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);
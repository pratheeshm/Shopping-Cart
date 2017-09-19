import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import ItemSelected from '../actions/item-selected';
import {Button, Icon} from 'react-materialize'
import axios from 'axios';
import '../index.css';

class AddToCart extends Component{

    render(){
        if(this.props.item.quantity>0){
        return(<div className="quantity-container">
                <div className="indigo-text text-darken-4">{this.props.item.quantity} Nos</div>
                <Button waves='light'onClick={()=>{
              
                    this.props.submit();
                }}>ADD<Icon right>add_shopping_cart
</Icon></Button>
            </div>);
    }
    else{
        return(
            <div className="quantity-container"> 
            <div className="red-text">0 Nos</div>
             <Button waves='light'disabled="disabled">ADD<Icon right>add_shopping_cart
</Icon></Button>
        </div>
        );
    }
}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit: () => {
            axios.post("http://10.4.6.34:4000/add_to_cart",{
                item:{
                    name:ownProps.item.name,
                    price:ownProps.item.price,
                    quantity:1,
                    productID:ownProps.item.productID
                }
            })
            .then(function(res){
            })
            .catch(function(err){
            });

            dispatch(ItemSelected(ownProps.item))
        }
 }
}
const mapStateToProps = (state, ownProps) => {
    return {
         Items:state.Items
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddToCart);
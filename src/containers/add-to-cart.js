import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import ItemSelected from '../actions/item-selected';
import ChangeQuantity from '../actions/quantity-change';
class AddToCart extends Component{

    render(){
        return(<div>
                <div>{this.props.item.quantity}</div>
                <button onClick={()=>{this.props.submit();this.props.changeQuantity()}}>ADD</button>
            </div>);
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit: () => {
            dispatch(ItemSelected(ownProps.item))
        },
        changeQuantity:() =>{
            dispatch(ChangeQuantity(ownProps.item))
            
        }

    }
}


export default connect(null,mapDispatchToProps)(AddToCart);
import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import ItemSelected from '../actions/item-selected';
import {Button, Icon} from 'react-materialize'
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
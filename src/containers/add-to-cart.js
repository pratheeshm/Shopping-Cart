import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import ItemSelected from '../actions/item-selected';
import '../index.css'
class AddToCart extends Component{

    render(){
        if(this.props.item.quantity>0){
        return(<div className="quantity-container">
                <div>{this.props.item.quantity} Nos</div>
                <button className="add-button"onClick={()=>{
              
                    this.props.submit();
                }}>ADD</button>
            </div>);
    }
    else{
        return(
            <div className="quantity-container">
            <div className="outof-stock">Out Of Stock</div>
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
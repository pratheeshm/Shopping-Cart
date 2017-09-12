import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import checkoutClicked from '../actions/checkout-clicked'
import '../checkout.css';
class Checkout extends Component{
   
render(){
    return(
        <div className="total-container">
        <button onClick={()=>this.props.dispatch1()}>Checkout</button>
        <div className="total">Rs: {this.props.total}</div>
        </div>
    );
}
}

const mapStateToProps = (state, ownProps) => {
    return {
        total:state.TotalPrice
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(checkoutClicked(ownProps.items))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
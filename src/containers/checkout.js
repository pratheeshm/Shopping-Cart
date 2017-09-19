import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import checkoutClicked from '../actions/checkout-clicked'
import {Button, Icon} from 'react-materialize'
import '../index.css';
import {Link} from 'react-router-dom'
class Checkout extends Component{
render(){
    return(
        <div className="checkout-container">
        <Link to="/checkout">
        <Button onClick={()=>this.props.dispatch1()} >Checkout<Icon right>attach_money</Icon>
      
        </Button>
        </Link>
        <div className="black-text">Rs: {this.props.total}</div>
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
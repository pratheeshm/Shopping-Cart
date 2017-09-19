import React,{Component} from 'react';
import {connect} from 'react-redux'; 
class CheckoutPage extends Component{
    render(){
        return(
            <div> Pay Rs:{this.props.total}</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        total: state.TotalPrice
    }
}
export default connect(mapStateToProps)(CheckoutPage);
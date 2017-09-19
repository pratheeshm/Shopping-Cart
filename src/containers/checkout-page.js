import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import '../index.css'
class CheckoutPage extends Component{
    render(){
        return(
            <div className="price red-text text-darken-4"> Pay Rs: {this.props.total}/-</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        total: state.TotalPrice
    }
}
export default connect(mapStateToProps)(CheckoutPage);
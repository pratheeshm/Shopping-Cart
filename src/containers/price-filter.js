import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon,Input} from 'react-materialize'
import priceFilterClicked from '../actions/price-filter-selected';
import '../index.css'
class PriceFilter extends Component{
    constructor(){
        super();
        this.fromValue=0;
        this.toValue=0;
        this.setFrom=this.setFrom.bind(this);
        this.getFrom=this.getFrom.bind(this);
        this.setTo=this.setTo.bind(this);
        this.getTo=this.getTo.bind(this);
        
    }
   setFrom(e){
    this.fromValue=e.target.value;
   }
   getFrom(){
return this.fromValue;
   }
   setTo(e){
    this.toValue=e.target.value;
    
   }
   getTo(){
    return this.toValue;
    
   }
    render(){
        return(
            <div className="filter-container" >
            <div className="filter-body">
                    <Input type="number" placeholder="min" min="0" max="100000" step="100"  onChange={this.setFrom}/>          
            <Input type="number" min="0" placeholder="max"max="100000" step="100" onChange={this.setTo}/>
            
            <Button onClick={()=>this.props.priceFilter(this.props.items,this.getFrom(),this.getTo())}>Filter</Button>
            </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        priceFilter: (items,from,to) => {
            dispatch(priceFilterClicked(items,from,to))
        }
 }
}
const mapStateToProps = (state, ownProps) => {
    return {
        items:state.Items    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PriceFilter);
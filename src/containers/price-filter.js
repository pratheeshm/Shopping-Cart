import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button,Input} from 'react-materialize'
import priceFilterClicked from '../actions/price-filter-selected';
import axios from 'axios';
import '../index.css'
class PriceFilter extends Component{
    constructor(){
        super();
        this.fromValue=0;
        this.toValue=100000;
        this.setFrom=this.setFrom.bind(this);
        this.getFrom=this.getFrom.bind(this);
        this.setTo=this.setTo.bind(this);
        this.getTo=this.getTo.bind(this);
        
    }
   setFrom(e){
       if(e.target.value!==""){
    this.fromValue=e.target.value;
       }
       else{
        this.fromValue=0;        
       }
   }
   getFrom(){
return this.fromValue;
   }
   setTo(e){
       if(e.target.value!==""){
    this.toValue=e.target.value;
       }
       else{
        this.toValue=100000;        
       }
    
   }
   getTo(){
    return this.toValue;
    
   }
    render(){
        return(
            <div className="filter-container" >
            <div className="filter-body">
                    <Input defaultValue="0" type="number" placeholder="min" min="0" max="100000" step="100"  onChange={this.setFrom}/>          
            <Input defaultValue="100000" type="number" min="0" placeholder="max"max="100000" step="100" onChange={this.setTo}/>
            
            <Button onClick={()=>this.props.priceFilter(this.props.items,this.getFrom(),this.getTo())}>Filter</Button>
            </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        priceFilter: (items,from,to) => {
            axios.get("http://10.4.6.34:4000/productListing?min_price="+from+"&max_price="+to)
            .then(function(res){
                dispatch(priceFilterClicked(res.data.result))
                
            })
            .catch(function(err){
                console.log(err);
            });
        }
 }
}
const mapStateToProps = (state, ownProps) => {
    return {
        items:state.Items    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PriceFilter);
const QuantityChanged=function(item){
    console.log(item);
    return{
        type:"QUANTITY_CHANGED",
        payload:item
    };
}

export default QuantityChanged;
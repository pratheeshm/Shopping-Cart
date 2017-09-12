const checkoutClicked=function(items){
    return{
        type:"CHECKOUT_CLICKED",
        payload:items
    };
}

export default checkoutClicked;
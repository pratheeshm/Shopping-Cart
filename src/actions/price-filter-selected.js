const priceFilterClicked=function(items){
    return{
        type:"PRICE_FILTER_CLICKED",
        items
    };
}

export default priceFilterClicked;
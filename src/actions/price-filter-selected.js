const priceFilterClicked=function(items,from,to){
    return{
        type:"PRICE_FILTER_CLICKED",
        items,
        from:parseInt(from),
        to:parseInt(to)
    };
}

export default priceFilterClicked;
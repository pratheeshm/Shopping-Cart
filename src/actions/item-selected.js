const ItemSelected=function(item){
    return{
        type:"ITEM_SELECTED",
        payload:item
    };
}

export default ItemSelected;
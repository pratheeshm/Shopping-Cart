
export default function(state=[],action){
    switch(action.type){
        case "ITEM_SELECTED":
        var newState=[...state];
        var a=false;
        for(var i=0;i<newState.length;i++){
            if(newState[i].productID===action.payload.productID){
                newState[i].quantity++;
                a=true;
            }
               
            
        }
        if(!a){
            newState=newState.concat(
                { productID:action.payload.productID,name:action.payload.name,price:action.payload.price,quantity:1}
             );
             
        }
        return newState;
       case "CHECKOUT_CLICKED":return [...state];
        default:return state;
           }
} 

export default function(state=[],action){
    switch(action.type){
        case "ITEM_SELECTED":
        var newState=[...state];
        var a=false;
        for(var i=0;i<newState.length;i++){
            if(newState[i].id==action.payload.id){
                newState[i].quantity++;
                a=true;
            }
               
            
        }
        if(!a){
            newState=newState.concat(
                { id:action.payload.id,name:action.payload.name,price:action.payload.price,quantity:1}
             );
             
        }
        return newState;
       case "CHECKOUT_CLICKED":return [...state];
        default:return state;
           }
} 
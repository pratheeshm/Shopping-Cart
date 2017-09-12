export default function(state=0,action){
    switch(action.type){
        case "CHECKOUT_CLICKED":var total=0;action.payload.map((item)=>total+=(item.price*item.quantity)); return total;
       
        default:return state;
           }
} 
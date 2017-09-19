
export default function(state=[],action){
    switch(action.type){
        case "FETCH_GET_API":
                let newState=[...state];
                newState=action.payload
        return newState
        case "ITEM_SELECTED": 
             newState = [...state];
          for(var i=0;i<newState.length;i++){
              if(newState[i].productID===action.payload.productID){
                newState[i].quantity=newState[i].quantity-1;
              }
          }
        return newState;
       case "PRICE_FILTER_CLICKED":
          newState=[...state];
          newState=action.items;
          return newState;
        default:
        return state;
        
           }
} 
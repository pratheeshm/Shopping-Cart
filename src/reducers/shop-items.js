var arr=[
        {
            id:1,
            name:"a",
            price:1000,
            quantity:10
        },
        {
            id:2,
            name:"b",
            price:2000,
            quantity:5
        },
        {
            id:3,
            name:"c",
            price:300,
            quantity:4
        },
        {
            id:4,
            name:"d",
            price:700,
            quantity:7
        }
    ];

export default function(state=arr,action){
    switch(action.type){
        
        case "ITEM_SELECTED": 
            let newState = [...state];
          for(var i=0;i<newState.length;i++){
              if(newState[i].id==action.payload.id){
                  console.log("match")
                newState[i].quantity=newState[i].quantity-1;
              }
          }
        return newState;
       
        default:return state;
        
           }
} 
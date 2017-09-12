var arr=[
        {
            id:1,
            name:"HP Laptop",
            price:33000,
            quantity:10
        },
        {
            id:2,
            name:"Samsung G",
            price:12000,
            quantity:5
        },
        {
            id:3,
            name:"Backpack",
            price:500,
            quantity:4
        },
        {
            id:4,
            name:"FastTrack",
            price:1000,
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
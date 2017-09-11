const initialCartListState = {
    arr:[]
}
export default function(state=initialCartListState,action){
    switch(action.type){
        case "ITEM_SELECTED":return{
            ...state,  
            arr: state.arr.concat(action.payload)
        };
       
        default:return initialCartListState;
           }
} 
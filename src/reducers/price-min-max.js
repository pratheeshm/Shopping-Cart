var initialState={
     min:0,
     max:100000
}

export default function(state=initialState,action){
    switch(action.type){
        case "PRICE_FILTER_CLICKED":
        let newState={...state};
        
        if(action.from!=0&&action.to!=0){
        newState.min=action.from;
        newState.max=action.to;
        }
        if(action.from!=0||action.to!=0){
            if(action.from==0){
            newState.min=0;
            newState.max=action.to;
            }
            if(action.to==0){
                newState.min=action.from;
                newState.max=0;
            }
        }
        if(action.from==0&&action.to==0){
            newState.min=0;
            newState.max=0;
            }
        return newState;
        default: return state;
    }

}

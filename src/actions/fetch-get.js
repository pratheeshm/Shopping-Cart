

const fetchGet=function(data){
    return{
        type:"FETCH_GET_API",
        payload:data
    };
}

export default fetchGet;
let formReducer=(state,action)=>{
    switch(action.type){
        case "HANDLE INPUT CHANGE":
            return{
                ...state,[action.field]:[action.payload]
            };
            default:
                return state;
    }

}

export default formReducer;
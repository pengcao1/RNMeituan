const fetchInfos = (state=[],action) =>{
    switch(action.type){
        case "ADD_FETCHINFO":
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed: false
                }
            ]
        case "TOGGLE_FETCHINFO":
            return state.map(fetchInfo=>
                (fetchInfo.id === action.id)
                ? {...fetchInfo,completed:!fetchInfo.completed}
                :fetchInfo
            )
        default:
            return state
    }
}
export default fetchInfos
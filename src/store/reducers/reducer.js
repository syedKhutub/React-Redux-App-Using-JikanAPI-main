let intiialState = {
    item: [],
    loading: false,
    count: 1,
    error: null,
    show: false
}

const reducer = (state = intiialState , action) =>{
    switch(action.type){
        case "FETCH_DATA_REQUEST":{
            return {
                ...state,
                loading: true,
                error: null

            }
        }
        case "FETCH_DATA_SUCCESS":{
            return {
                ...state,
                loading: false,
                item: action.item
            }
        }
        case "FETCH_DATA_ERROR":{
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: []
            }
        }
        case "INCREMENT_COUNT":{
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case "SHOW_MORE" :{
            return { 
                ...state,
                show: true
            }
        }
        default: return state
    }
}


export default reducer;
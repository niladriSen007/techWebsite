const reducer = ((state,action)=>{
    switch(action.type)
    {
        case "IS_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload,
            }
        case "REMOVE_POST":
            return{
                ...state, 
                hits:state.hits.filter(hit=>hit.objectID !== action.payload)
            }
        case "NEXT_PAGE":
            return{
                ...state,
                page:state.page>=state.nbPages-1?0:state.page+1,        
        }
        case "PREV_PAGE":
            // let pageNum = state.page;
            return{
                ...state,
                page:state.page<=0?0:state.page-1,
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
            }
            default:
                return {state}
    }
})

export default reducer;
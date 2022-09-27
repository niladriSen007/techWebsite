import React, { useContext,useReducer,useEffect } from "react";
import reducer from "../reducer/reducer";
const AppContext = React.createContext();

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading:true,
    query:"",
    nbPages:0,
    page:0,
    hits:[]
}

const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);  

    const fetchNewsData = async(url) =>{
      try
      {
        //      const response = await fetch(url,{
        //     method:"GET",
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        const response = await fetch(url);
        dispatch({type:"IS_LOADING"})

        const news =  await response.json();
        if(!news)
        {
            console.log("No news to show")
        }
        else
        {
            console.log(news)
            dispatch({ type:"GET_STORIES", payload:{ hits:news.hits, nbPages:news.nbPages, } })
        } 
      }
      catch(e)
      {
        console.log(e)
      }
    }

    const removePost = (ID) =>{
        dispatch({type:"REMOVE_POST",payload:ID})
    }

    const searchPost = (searchQuery) =>{
        dispatch({type:"SEARCH_QUERY",payload:searchQuery})
    }

    const getPrevPage = () =>{
        dispatch({type:"PREV_PAGE"})
    }

    const getNextPage = () =>{
        dispatch({type:"NEXT_PAGE"})
    }


    useEffect(()=>{
        fetchNewsData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])

    return (
        <AppContext.Provider value={{...state,removePost,searchPost,getPrevPage,getNextPage}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppProvider,useGlobalContext}
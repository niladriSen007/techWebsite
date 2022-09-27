import React from 'react'
import {NavLink} from "react-router-dom"
import { useGlobalContext } from './Context'
function Stories() {

  const {hits,nbPages,isLoading,removePost} = useGlobalContext();

  if(isLoading)
  {
    return(
      <>
          <h2 style={{textAlign:"center"}}>Loading...</h2>
      </>
    )
  }

  return (
    <div>
      <div className="stories-div">
      {
        
        hits.map(hit=>{
          const {title,url,author,num_comments,objectID} = hit;
          return(
            <>
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p> By <span>{author}</span> | <span>{ num_comments }</span> Comments</p>
              <div className="card-button">
                <a href={url} target="_blank">Read More</a>
                <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
              </div>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
  
  )
}

export default Stories
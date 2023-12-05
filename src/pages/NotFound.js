import React from "react"
import notFoundImage from "../assets/cat-notfound.png"
const NotFound = () => {
  return(
    <div className="not-found-position"> 
      <h2>Oops, that page does not exist!</h2>
      <img src={notFoundImage}/>
    </div>
  )
}

export default NotFound
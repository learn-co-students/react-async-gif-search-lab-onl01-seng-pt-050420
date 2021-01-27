
import React from 'react'
 
const GifList = props => 
<div>{props.gifs.map(gif => <p key={gif.url} ><img src={gif.url} alt="gif" /></p>)} </div>  

export default GifList
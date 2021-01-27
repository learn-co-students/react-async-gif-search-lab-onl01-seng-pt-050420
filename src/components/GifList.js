import React, { Component}from 'react'

class GifList extends Component{



    render() {
        return (
         <div>
       
                {this.props.gifs.map(gif => <p key={gif.url} ><img src={gif.url} alt="gif" /></p>)}

        </div>
        )
    }
}

export default GifList
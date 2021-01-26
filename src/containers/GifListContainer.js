import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
    state = {
        gifs: []
    }


    fetchResults = (query = "kamala") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(rsp => rsp.json())
            .then(data =>
              this.setState({gifs: data.data.slice(0,8).map(gif => ({ url: gif.images.original.url }))}),
            //  console.log(this.state))
        )
    }

    componentDidMount() {
        this.fetchResults()
    }
    render(){

        return(
            <div>
                <GifSearch handleSubmit={this.fetchResults} />
                <GifList gifs={this.state.gifs} />
            </div>
      
        )
    }
  }
  

export default GifListContainer
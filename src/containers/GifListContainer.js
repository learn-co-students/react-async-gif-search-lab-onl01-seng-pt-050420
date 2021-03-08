import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

  state = {
    gifs: []
  }



    render() {
        return (
            <div>
                GifListContainer
                <GifSearch fetchGIFs={this.state.fetchGIFs}/> 
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer

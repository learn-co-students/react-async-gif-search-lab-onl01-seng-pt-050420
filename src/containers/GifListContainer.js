import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

class GifListContainer extends Component {
    state = {
        gifs: []
    }
    fetchResults = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
            .then(rsp => rsp.json())
            .then(({ data }) => this.setState({
                gifs: data.slice(0, 3).map(gif => ({ url: gif.images.original.url }))
            }))

    }

    componentDidMount() {
        this.fetchResults()
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.fetchResults} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;
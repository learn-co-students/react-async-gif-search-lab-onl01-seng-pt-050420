import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        gifs: [],
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.children[0].value}&api_key=iwQR2RU1yzOcl2T99mmCFE6iOCZv7DbJ&rating=g`)
        .then(resp => resp.json())
        .then((json) => {
            json.data.slice(0,3).map(gif => this.state.gifs.push(gif.images.original.url))
            console.log(this.state.gifs)
            console.log(json.data.slice(0,3))
        })
    }

    render() {
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} query={this.state.query} />
                <img src={this.state.gifs[0]} alt="img"></img>
                {this.state.gifs.map(gif => <GifList url={gif} />)}
            </div>
        )
    }
}
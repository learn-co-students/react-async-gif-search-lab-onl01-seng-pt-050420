import React, { Component } from 'react'
import GifList from '../GifList'
import GifSearch from '../GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: {}
    }

    search = ({query}) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=HyRtOnDgTc0pijVLeGrKApsULz8YeIzZ&rating=g`)
        .then(res => res.json())
        .then(gif => {
            this.setState({
                gifs: gif.data.slice(0,3)
            })
        })
    }


    render(){
        return(
            <div>
                <GifList 
                gif1={this.state.gifs[0]}
                gif2={this.state.gifs[1]}
                gif3={this.state.gifs[2]}
                />
                <GifSearch handleQuery={this.search} />
            </div>
        )
    }
}
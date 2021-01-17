import React, { Component }  from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends Component {
    state = {
        images: {}
    }
    search = ({query}) => {
        this.setState({
            images: {}
        })
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=H0IlcU1JXpHuQliPKmLWTqgeVaPEzcHq&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
            images: data.data.slice(0,3)
            })
        })
    };

    render() {
        return(
            <div>
                <GifSearch handleQuery={this.search}/>
                <GifList 
                    img1={this.state.images[0]}
                    img2={this.state.images[1]}
                    img3={this.state.images[2]}
                />
            </div>
        )
    }
}
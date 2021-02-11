import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    API_PREFIX = 'https://api.giphy.com/v1/gifs/search?q=';
    API_KEY = '&api_key=dc6zaTOxFJmzC';
    API_SUFFIX = '&rating=g';

    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        fetch(this.API_PREFIX + event.target.children[0].value + this.API_KEY + this.API_SUFFIX)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    images: { 
                        0: json.data[0].images.original.url, 
                        1: json.data[1].images.original.url, 
                        2: json.data[2].images.original.url 
                    }
                })
            }
        );
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch} />
                <br />
                <GifList images={this.state.images}/>
            </div>
        );
    }
}
import React, { Component } from 'react' 

export default class GifList extends Component {
    render() {
        return(
            <img src={`${this.props.url}`} alt="img"></img>
        )
    }
}
import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="query"></input>
                <button type="submit" value="Search">Search</button>
            </form>
        )
    }
}
import React, { Component } from 'react'

class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ""
        }
    }
    handleChange = (event) => {
        this.setState({ searchInput: event.target.value })
        console.log(event.target.value)
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchInput)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input
                        type="input"
                        name="search"
                        value={this.state.searchInput}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default GifSearch;
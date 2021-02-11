import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch} >
                    <input type="text" placeholder="Search for..." value={this.state.value} onChange={this.handleChange}></input>
                </form>
            </div>
        );
    }
}
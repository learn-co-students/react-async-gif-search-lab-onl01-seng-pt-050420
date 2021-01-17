import React, { Component }  from 'react';

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleQuery(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    onChange={event => this.handleChange(event)}
                    value={this.state.query}
                />
                <input type="submit"/>
                </form>
            </div>
        )
      }
}
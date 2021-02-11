import React, { Component } from 'react';

export default class GifList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><img src={this.props.images[0]} /></li>
                    <li><img src={this.props.images[1]} /></li>
                    <li><img src={this.props.images[2]} /></li>
                </ul>
            </div>
        );
    }
}
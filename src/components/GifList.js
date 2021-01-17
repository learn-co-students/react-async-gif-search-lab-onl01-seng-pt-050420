import React, { Component }  from 'react';
export default class GifList extends Component {
    
    render () {
        if (this.props.img1) {
            return(
                <ul>
                    <li><img src={this.props.img1.images.fixed_width.url} /></li>
                    <li><img src={this.props.img2.images.fixed_width.url} /></li>
                    <li><img src={this.props.img3.images.fixed_width.url} /></li>
                </ul>
            )
        } else {
            return(
                <ul></ul>
            )
        }
    }
}
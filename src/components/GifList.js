import React, {Component} from 'react'

export default class GifList extends Component {
    render(){
        if (this.props.gif1){
            return(
                <ul>
                    <li><img src={this.props.gif1.images.fixed_width.url}/></li>
                    <li><img src={this.props.gif2.images.fixed_width.url}/></li>
                    <li><img src={this.props.gif3.images.fixed_width.url}/></li>
                </ul>

            )
        } else {
            return(
                <ul></ul>
            )
        }
    }
}
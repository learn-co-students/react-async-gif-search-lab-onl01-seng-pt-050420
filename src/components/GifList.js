import React from 'react';

export default class GifList extends React.Component{

    
        render(){
            if (this.props.gif1){
                return(
                    <ul>
                        <li><img src={this.props.gif1.images.original.url} alt=""/></li>
                        <li><img src={this.props.gif2.images.original.url} alt=""/></li>
                        <li><img src={this.props.gif3.images.original.url} alt=""/></li>
                    </ul>
    
                )
            } else {
                return(
                    <ul></ul>
                )
            }
        }
}
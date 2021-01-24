import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends React.Component{

    state ={
        gifs: {}
        
    }
    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=N2M6kKukZX3PbfeTnJbiJcQl1h8FF8Dv")
        .then(response => response.json())
        .then(gifs =>{
        
            let gif = gifs.data.slice(0,3)
            this.setState({
                gifs:gif
            })
            
        }
        )
    }
    search
 
    render(){
      
        return(
        <div>
        <GifSearch handleQuery={this.search}/>
        <GifList 
         gif1={this.state.gifs[0]} 
         gif2={this.state.gifs[1]} 
         gif3={this.state.gifs[2]} 
         />
        
        </div>
         
      
        )
    }
}
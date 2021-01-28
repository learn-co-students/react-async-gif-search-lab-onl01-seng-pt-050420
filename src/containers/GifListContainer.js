import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
      }
    
      render() {
        return(
          <div>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
          </div>
        )
      }
    
      fetchGIFs = (input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=D2SDM20qf41YtojrzNcgWzd1TGUmcwZ5`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }
    
      componentDidMount() {
        this.fetchGIFs()
      }
    }

export default GifListContainer;
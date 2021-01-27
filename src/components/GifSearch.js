import React, { Component}from 'react'

class GifSearch extends Component{

    state = {
        search: ""
    }

    handleChange=(e) => {
        this.setState({search: e.target.value})
        // console.log(this.state.search)
    }


    handleSearch = (event)=>{
        event.preventDefault()
        console.log(this.state.search)
        this.props.handleSubmit(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleChange} type="text"></input>  
                    <button type="submit">SEARCH</button>  
                </form>
            </div>
   
        )
    }
}

export default GifSearch
import React from 'react';

export default class GifSearch extends React.Component{

    state ={
        query: ""
    }
    handleChange = (e) =>{
       
        this.setState({
            query: e.target.value
        })
      
    }
    handleSearch = (e) =>{
        e.preventDefault() 
        this.props.handleQuery(this.state)
    }


    render(){
        return(

              <form onSubmit={e => this.props.handleSearch(e)}>
            <input type='text' onChange={e => this.handleChange(e)} value={this.state.query}/>
            <input type="submit" />
        </form>
        )
     
    }
}
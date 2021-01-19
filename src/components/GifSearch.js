import React, {Component} from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }
    handleChange = (e) =>{
        this.setState({
            query: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleQuery(this.state)
    }
    render(){
        return(
         <form onSubmit={event => this.handleSubmit(event)}>
             <input type="text" onChange={event => this.handleChange(event)} value={this.state.query}/>
            <input type="submit"/>
         </form>
        )
    }
}
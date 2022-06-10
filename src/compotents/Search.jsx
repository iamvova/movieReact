import React from "react";

class Search extends React.Component{
    state = {
        search: '',
        type: 'all'
    }
    
    handlerKey = (event)=>{
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event)=>{
        this.setState(()=>({type: event.target.dataset.type}), ()=>{
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
    
    render(){
        return <div className="row">
            <div className="input-field ">
                <input placeholder="Enter movies" id="email_inline" type="email" className="validate" onKeyDown={this.handlerKey} onChange={(e)=> this.setState({search: e.target.value})} />
                <button className="btn search-btn" onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}>Enter</button>
            </div>          
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
                    <span>All</span>
                </label>
            </div>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
                    <span>Movies only</span>
                </label>
            </div>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                    <span>Series only</span>
                </label>
            </div>
        </div>
    }
}

export {Search}

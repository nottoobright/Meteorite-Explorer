import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchterm: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            searchterm: e.target.value
        })
    }

    handleClick = () => {
        setTimeout(() => {
            this.props.handleSearch(this.state.searchterm);
        }, 0); 
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}

export default SearchBar;
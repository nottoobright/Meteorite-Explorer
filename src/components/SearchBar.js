import React, { Component } from 'react';
import '../styles/SearchBar.css';

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
            <div className='pa4'>
                <div className="pa2 w-20 bg-white">
                    <input className='pa2' type='text' placeholder='Enter Search Terms' onChange={this.handleChange} />
                    <button className="pointer ba br2 bg-btn text pa2 ml1 mv1 f4 shadow-hover border-box" onClick={this.handleClick}>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;
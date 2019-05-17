import React, { Component } from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			searchterm: ''
		}
	}

	handleSearch = (term) => {
		this.setState({
			searchterm: term
		})
		console.log(this.state.searchterm);
	}

	componentDidUpdate(prevProps, prevState) {
		const result = []
		if (prevState.searchterm !== this.state.searchterm) {
			fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
				.then(res => {
					return res.json();
				})
				.then(res => {
					res.filter((el) => {
						if (el.name.match(new RegExp(this.state.searchterm, "g"))) {
							result.push(el);
							return result
						};
						if( result.length > 0) {
							this.setState({
								data: result
							})
						}
					});
				})
				setTimeout(() => {
					console.log(this.state.data)
				}, 	10);
		}
	}
	

	render() {
		return (
			<div className = 'App bg-main'>
				<Navbar/>
				<SearchBar handleSearch={this.handleSearch}/>
			</div>
		)
	}
	

}

export default App;

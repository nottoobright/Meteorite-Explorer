import React, { Component } from 'react';
import './App.css';

//Components
import SearchBar from './components/SearchBar';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: '',
			searchterm: ''
		}
	}

	url = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

	handleSearch = (term) => {
		this.setState({
			searchterm: term
		})
		console.log(this.state.searchterm);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps, prevState);
		if (prevState.searchterm !== this.state.searchterm) {
			fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
				.then(res => {
					return res.json();
				})
				.then(res => {
					res.filter((el) => {
						if (el.name.match(new RegExp(this.state.searchterm, "g"))) {
							return el;
						};
					});
				})
				.then(el => {
					this.setState({
						data: el
					})
				})

			setTimeout(() => {
				console.log(this.state.data)
			}, 100);
		}
	}
	

	render() {
		return (
			<div className = 'App'>
				<SearchBar handleSearch={this.handleSearch}/>
			</div>
		)
	}
	

}

export default App;

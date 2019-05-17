import React, { Component } from 'react';
import Loader from 'react-loader'
import './App.css';

//Components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MeteoriteList from './components/MeteoriteList';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			searchterm: '',
			error: '',
			loading: true,
		}
	}

	handleSearch = (term) => {
		this.setState({
			searchterm: term
		})
		console.log(this.state.searchterm);
	}

	componentDidMount() {
		fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
			.then(res => {
				return res.json();
			})
			.then(res => {
				this.setState({
					data: res,
					loading: false
				})
			})
	}

	componentDidUpdate(prevProps, prevState) {
		const result = []
		if (prevState.searchterm !== this.state.searchterm) {
			if(this.state.searchterm.length > 0) {
				fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
					.then(res => {
						this.setState({
							loading: true
						})
						return res.json();
					})
					.then(res => {
						res.filter((el) => {
							if (el.name.match(new RegExp(this.state.searchterm, "g"))) {
								result.push(el);
								return result
							};
							if (result.length > 0) {
								this.setState({
									data: result,
									loading: false
								})
							}
							else {
								this.setState({
									error: 'No matching result found',
									loading: false
								})
							}
						});
					})
			}
			else {
				fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
					.then(res => {
						return res.json();
					})
					.then(res => {
						this.setState({
							data: res,
							loading: false
						})
					})
			}
		}
	}
	
	render() {
		const loading = this.state.loading;
		const options = {
			lines: 13,
			length: 15,
			width: 5,
			radius: 15,
			scale: 1.00,
			corners: 1,
			color: '#FFFFFF',
			opacity: 0.25,
			rotate: 0,
			direction: 1,
			speed: 1,
			trail: 60,
			fps: 20,
			zIndex: 2e9,
			top: '50%',
			left: '50%',
			shadow: false,
			hwaccel: false,
			position: 'absolute'
		}
		return (
			<div className='App bg-main'>
				<Navbar />
				<SearchBar handleSearch={this.handleSearch} />
				{this.state.error}
					<Loader loaded={!loading} options={options}>
						<MeteoriteList data={this.state.data} />
					</Loader>
			</div>
		)
	}
}

export default App;

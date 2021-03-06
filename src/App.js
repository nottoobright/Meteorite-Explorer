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
			filteredData: [],
			searchterm: '',
			error: '',
			loading: true,
		}
	}

	handleSearch = (term) => {
		this.setState({
			searchterm: term
		})
	}

	componentDidMount() {
		fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=5000')
			.then(res => {
				return res.json();
			})
			.then(res => {
				this.setState({
					data: res,
					filteredData: res,
					loading: false
				})
			})
	}

	componentDidUpdate(prevProps, prevState) {
		const result = []
		const term = this.state.searchterm.toUpperCase();
		if (prevState.searchterm !== this.state.searchterm) {
			if(this.state.searchterm.length > 0) {
				this.state.data.filter((el) => {
					if (el.name.toUpperCase().includes(term)) {
						result.push(el);
						return result
					};
					if (result.length > 0) {
						this.setState({
							filteredData: result,
							loading: false,
							error: ''
					})
					}
					else {
						this.setState({
							error: 'No matching result found',
							filteredData: [],
							loading: false
						})
					}
				})
			}
			else {
				const data = this.state.data
				this.setState({
					filteredData: data,
					error: '',
					loading: false
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
				<div className='f4 red'>
					{this.state.error}
				</div>
				<Loader loaded={!loading} options={options}>
					<MeteoriteList data={this.state.filteredData} />
				</Loader>
			</div>
		)
	}
}

export default App;

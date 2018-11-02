import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {

	state = {
		firstButtonValue: 'Not Clicked',
		secondButtonValue: 'Not Clicked',
		thirdButtonValue: 'Not Clicked'
	};

	componentDidMount = () => {

	};

	firstButtonClick = (e) => {
		this.setState({
			firstButtonValue: 'Clicked'
		})
	};

	secondButtonClick = (e) => {
		this.setState({
			secondButtonValue: 'Clicked'
		})
	};

	thirdButtonClick = (e) => {
		this.setState({
			thirdButtonValue: 'Clicked'
		})
	};



	render() {
		return (
			<div className="App">
				<button className="firstButton" onClick={this.firstButtonClick}>
					First Buttons
				</button>
				<p>{this.state.firstButtonValue}</p>
				<button className="secondButton" onClick={this.secondButtonClick}>
					Second Button
				</button>
				<p>{this.state.secondButtonValue}</p>
				<button className="thirdButton" onClick={this.thirdButtonClick}>
					Third Button
				</button>
				<p>{this.state.thirdButtonValue}</p>

			</div>
		);
	}
}

export default App;

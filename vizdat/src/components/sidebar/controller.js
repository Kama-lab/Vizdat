import React from 'react';
import Plot from 'react-plotly.js';
import './controller.css';

export default class SidebarController extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input1:3,
			input2:2,
			input3:2,
		}
	this.changeHandler = this.changeHandler.bind(this)
	}

	changeHandler(e) {
		this.props.onChange(e.target.value)
		//this.setState({input1:e.target.value})
		// if (typeof this.props.onChange == 'function') {
			
		// }
	}

	render() {
		return (
			<div>
				<input type="text" value={this.props.value} onChange={this.changeHandler} />
				<input type="text" value={this.props.value} onChange={this.changeHandler}/>
				<input type="text" value={this.props.value} onChange={this.changeHandler}/>
			</div>
			)
	}
}
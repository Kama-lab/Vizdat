import React from 'react';
import Plot from 'react-plotly.js';
import './controller.css';

export default class SidebarController extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input_value_one:2,
			input_value_two:2,
			input_value_three:2,
		}
	}

	handleChange(nth_value) {
		this.child.current.updateGraph(this.state.input_value_one,this.state.input_value_two,this.state.input_value_three)
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.input_value_one} onChange={this.handleChange} />
				<input type="text" value={this.state.input_value_two} onChange={this.handleChange}/>
				<input type="text" value={this.state.input_value_three} onChange={this.handleChange}/>
			</div>
			)
	}
}
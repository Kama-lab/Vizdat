import React from 'react';
import Plot from 'react-plotly.js';
//import Sidebar from '../sidebar/sidebar'
import './toggle.css'





export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		}
		
		render(){
			return (
				<div className={`toggle-menu${this.props.isMenuOpen === true ? 'open':''}`}>
				<button type="button" onClick={this.props.onMenuToggle}>{this.props.isMenuOpen ? 'ON':'OFF'}</button>
				</div>
			);
		}
	}


import React from 'react';
import Plot from 'react-plotly.js';
import './toggle.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		}
		render(){
			return (
				<div className={`toggle-menu${this.props.isMenuOpen === true ? 'open':''}`}>
				<Button variant="light" type="button" size="sm" onClick={this.props.onMenuToggle}>{this.props.isMenuOpen ? '>>':'<<'}</Button>
				</div>
			);
		}
	}


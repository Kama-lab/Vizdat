import React from 'react';
import Plot from 'react-plotly.js';
import './toggle.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SidebarController from '../sidebar/controller'

export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value1:3,
			value2:2,
			value3:2,
		}
		this.handleChange = this.handleChange.bind(this)
		}
		handleChange(value) {
			this.setState({value1:value})
		}
		render(){
			return (
				<div className={`toggle-menu${this.props.isMenuOpen === true ? 'open':''}`}>
				<Button className={`toggle-button${this.props.isMenuOpen === true ? 'open':''}`} variant="light" type="button" size="sm" onClick={this.props.onMenuToggle}>
				{this.props.isMenuOpen ? <ArrowForwardIosIcon/>:<ArrowBackIosIcon/>}</Button>
				<div className="sidebar">
					<SidebarController value={this.state.value1} onChange={this.handleChange}/>
					<span style={{color:"white"}}>{this.state.value1}</span>
				</div>
				</div>
			);
		}
	}


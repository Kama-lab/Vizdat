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
		this.state = {}
		}
		render(){
			return (
				<div className={`toggle-menu${this.props.isMenuOpen === true ? 'open':''}`}>
				<Button className={`toggle-button${this.props.isMenuOpen === true ? 'open':''}`} variant="light" type="button" size="sm" onClick={this.props.onMenuToggle}>
				{this.props.isMenuOpen ? <ArrowForwardIosIcon/>:<ArrowBackIosIcon/>}</Button>
				<div className="sidebar">
					<SidebarController ref={this}/>
				</div>
				</div>
			);
		}
	}


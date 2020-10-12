import React from 'react';
import Plot from 'react-plotly.js';
import './sidebar.css'





export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen:true
		}
		this.toggleMenu = this.toggleMenu.bind(this)

		toggleMenu() {
			this.setState({isMenuOpen:!this.state.isMenuOpen})
		}

		render(){
			return (
				<div className="sidebar-menu">
				//<SidebarMenu onMenuToggle={this.toggleMenu} isMenuOpen={this.isMenuOpen}/>
				<button type="button" className='button small float-right' onClick={this.props.onMenuToggle}>Toggle</button>
					</div>
			)
		}
	}
}


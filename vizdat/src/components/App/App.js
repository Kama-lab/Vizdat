import React from 'react';
import PlotEx from '../test.js';
import './App.css'
import Toggle	from '../toggle/toggle'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isMenuOpen:false,
			isSidebarOn:0
		};

		this.toggleMenu = this.toggleMenu.bind(this);
		this.child = React.createRef();
		}
		toggleMenu() {
			this.setState(state=>({isMenuOpen:!this.state.isMenuOpen}));
			this.setState({isSidebarOn:Math.abs(this.state.isSidebarOn-300)})
			this.child.current.updateDimensionsAfterToggle(this.state.isSidebarOn);
		}
		render() {
			return (<div>
			<Toggle onMenuToggle={this.toggleMenu} isMenuOpen={this.state.isMenuOpen}/>
  			<PlotEx ref={this.child}/>
  			</div>);
		}
		
}

export default App;

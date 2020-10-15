import React from 'react';
import PlotEx from '../test.js';
import './App.css'
import Toggle	from '../toggle/toggle'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isMenuOpen:false,
			isSidebarOn:300
		};

		this.toggleMenu = this.toggleMenu.bind(this);
		this.child = React.createRef();
		}
		toggleMenu() {
			this.setState(state=>({isMenuOpen:!this.state.isMenuOpen}));
			this.setState({isSidebarOn:Math.abs(this.state.isSidebarOn-300)})
			this.child.current.updateDimensionsAfterToggle();
		}
		render() {
			return (<div>
  			<PlotEx ref={this.child}/>
  			<Toggle onMenuToggle={this.toggleMenu} isMenuOpen={this.state.isMenuOpen}/>
  			</div>);
		}
		
}

export default App;

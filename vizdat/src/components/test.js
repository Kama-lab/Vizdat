import React from 'react';
import Plot from 'react-plotly.js';
import './test.css'
export default class PlotEx extends React.Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.state = {
      sidebar:0,
      layout: { 
      autosize: false,
      width:window.innerWidth,
      height:window.innerHeight
    },
    line1: {
      x: [-3, -2, -1],
      y: [1, 2, 3], 
      name: 'Line 1'
    },
    line2: {
      x: [1, 2, 3],
      y: [-3, -2, -1],
      name: 'Line 2'
    }, 
    revision: 0,
  }
  }

componentDidMount() {
  this.updateDimensions();
  window.addEventListener('resize', this.updateDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}

updateDimensionsAfterToggle() {
  //this.setState({sidebar:Math.abs(this.state.sidebar-300)})
  const Layout = {autosize: false, width:(window.innerWidth - this.state.sidebar), height:window.innerHeight}
  this.setState({layout:Layout});
}

updateDimensions() {
  //this.setState({sidebar:Math.abs(this.state.sidebar-300)})
  const Layout = {autosize: false, width:(window.innerWidth  - this.props.isSidebarOn), height:window.innerHeight}
  this.setState({layout:Layout});
}


  
  
  render() {  
    return (<div>
      <Plot 
        data={[
          this.state.line1,
          this.state.line2,
        ]}
        layout={this.state.layout}
        revision={this.state.revision}
        graphDiv="graph"
      />
      <div>
      {this.state.width}
      {this.state.sidebar}
      </div>
    </div>)
  }
}
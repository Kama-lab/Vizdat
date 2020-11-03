import React from 'react';
import Plot from 'react-plotly.js';
import './test.css'
export default class PlotEx extends React.Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.state = {
      sidebar:300,
      layout: { 
      autosize: false,
      width:window.innerWidth,
      height:window.innerHeight
    },
    pie_chart : {
            values: [1, 2, 2],
            type: 'pie',
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

updateDimensionsAfterToggle(isSidebarOn) {
  this.setState({sidebar:isSidebarOn})
  const Layout = {autosize: false, width:(window.innerWidth - isSidebarOn), height:window.innerHeight}
  this.setState({layout:Layout});
}

updateGraph(value_one,value_two,value_three) {
  const Pie_chart = {
    values:[value_one,value_two,value_three],
    type:'pie'
  }
  
  this.setState({pie_chart:Pie_chart})
}

updateDimensions() {
  const Layout = {autosize: false, width:(window.innerWidth  - this.state.sidebar), height:window.innerHeight}
  this.setState({layout:Layout});
}


  
  
  render() {  
    return (<div className="main">
      <div className={`sidebar-container${this.state.sidebar == 0 ? 'closed':''}`}>
      </div>
      <div>
      <Plot
        data={[
          this.state.pie_chart,
        ]}
        layout={ this.state.layout }
      />
    </div>
    </div>)
  }
}
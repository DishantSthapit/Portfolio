import React from 'react';
import "./index.css";
import CanvasJSReact from "./../../lib/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SkillChart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
		const options = {
			animationEnabled: true,
			theme: "light",
			title:{
				text: "Knowldge Base"
			},
			axisX: {
				title: "Skills",
				reversed: true,
			},
			axisY: {
				title: "Ratings",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  7, label: "CSS" },
					{ y:  8, label: "HTML" },
					{ y:  7, label: "Javascript" },
					{ y:  5, label: "PHP" },
					{ y:  7, label: "UI/UX Design" },
					{ y:  7, label: "React" }
				]
			}]
		}
		return (
		<div className="canvas-wrapper">
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

}

export default SkillChart;
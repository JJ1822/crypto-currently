import React from 'react';
import {Component} from 'react';


import { scalePoint } from  "d3-scale";
import PropTypes from "prop-types";

import { ChartCanvas, Chart } from "react-stockcharts";
import { BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";

import { getData } from "../../util/test_data.js"


class BarChart extends React.Component {

// ==================================================
// LifeCycle
// ==================================================
  componentDidMount() {
    debugger
  }

// ==================================================
// Render
// ==================================================

	render() {

		const { data: unsortedData, type, width, ratio } = this.props;

		const data = unsortedData.slice().sort((a, b) => a.income - b.income);

		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
					margin={{ left: 80, right: 10, top: 20, bottom: 30 }} type={type}
					seriesName="Sentiment"
					xExtents={list => list.map(d => d.x)}
					data={data}
					xAccessor={d => d.x} xScale={scalePoint()}
					padding={1}>
				<Chart id={1}
						yExtents={d => [0, d.y]}>
					<XAxis axisAt="bottom" orient="bottom" />
					<YAxis axisAt="left" orient="left" />
					<BarSeries yAccessor={d => d.y} />
				</Chart>
			</ChartCanvas>
		);
	}
}

BarChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

BarChart.defaultProps = {
	type: "svg",
};

BarChart = fitWidth(BarChart);

export default BarChart;

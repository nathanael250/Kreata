import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data, width = 300, height = 150 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Set up scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((_, index) => index))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100]) // Assuming percentages
      .range([height, 0]);

    // Add bars for green data
    svg
      .selectAll(".bar-green")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-green")
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => yScale(d.green))
      .attr("width", xScale.bandwidth() / 2)
      .attr("height", (d) => height - yScale(d.green))
      .attr("fill", "#00ff12");

    // Add bars for blue data
    svg
      .selectAll(".bar-blue")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-blue")
      .attr("x", (_, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d.blue))
      .attr("width", xScale.bandwidth() / 2)
      .attr("height", (d) => height - yScale(d.blue))
      .attr("fill", "blue");
  }, [data, width, height]);

  return <div ref={chartRef}></div>;
};

export default BarChart;

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CircularProgress = ({
  value,
  total = 100,
  radius = 50,
  strokeWidth = 1,
  color = "#25A906",
  backgroundColor = "#e6e6e6",
}) => {
  const svgRef = useRef(null);
  const [dynamicRadius, setDynamicRadius] = useState(radius);
  const [dynamicStrokeWidth, setDynamicStrokeWidth] = useState(strokeWidth);

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth < 640) { 
        setDynamicRadius(30); 
        setDynamicStrokeWidth(1);  
      } else if (window.innerWidth < 1024) {  
        setDynamicRadius(40); 
        setDynamicStrokeWidth(1); 
      } else { 
        setDynamicRadius(radius); 
        setDynamicStrokeWidth(strokeWidth);  
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [radius, strokeWidth]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const circumference = 2 * Math.PI * dynamicRadius;
    const offset = circumference - (value / total) * circumference;

    svg
      .select("circle.progress-ring")
      .attr("stroke-dasharray", `${circumference} ${circumference}`)
      .transition()
      .duration(500)
      .attr("stroke-dashoffset", offset);
  }, [value, dynamicRadius, total]);

  return (
    <svg ref={svgRef} width={dynamicRadius * 2 } height={dynamicRadius * 2}>
      <circle
        stroke={backgroundColor}
        fill="transparent"
        strokeWidth={dynamicStrokeWidth}
        r={dynamicRadius}
        cx={dynamicRadius}
        cy={dynamicRadius}
      />
      <circle
        className="progress-ring"
        stroke={color}
        fill="transparent"
        strokeWidth={dynamicStrokeWidth}
        r={dynamicRadius}
        cx={dynamicRadius}
        cy={dynamicRadius}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={dynamicRadius / 2}
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
};

export default CircularProgress;

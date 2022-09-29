import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const valuesArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const maximumValue = Math.max(...valuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

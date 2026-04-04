import { Link } from "react-router-dom";
import "./lineChartBox.scss";
import { Line, LineChart, Tooltip } from "recharts";
import React from "react";

type LineChartBoxProps = {
  title: string;
  color: string;
  icon: string;
  number: number | string;
  percentage: number;
  dataKey: string;
  chartData: object[];
};

const LineChartBox = ({
  title,
  color,
  icon,
  number,
  percentage,
  dataKey,
  chartData,
}: LineChartBoxProps) => {
  return (
    <div className="lineChartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" className="link" style={{ color: color }}>
          View All
        </Link>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <LineChart
            style={{
              width: "99%",
              maxWidth: "300px",
              maxHeight: "100px",
              aspectRatio: 1.618,
            }}
            data={chartData}
          >
            <Tooltip
              contentStyle={{
                background: "transparent",
                border: "none",
                fontSize: "12px",
              }}
              labelStyle={{ display: "none" }}
              position={{ x: 5, y: 20 }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "#8884d8",
              }}
            />
          </LineChart>
        </div>

        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LineChartBox);

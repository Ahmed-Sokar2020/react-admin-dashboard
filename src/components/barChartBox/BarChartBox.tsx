import { Bar, BarChart, Tooltip } from "recharts";
import "./barChartBox.scss";
import React from "react";

type BarChartBoxProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = ({
  title,
  color,
  dataKey,
  chartData,
}: BarChartBoxProps) => {
  return (
    <div className="barChartBox">
      <h2>{title}</h2>

      <div className="chart">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "100px",
            aspectRatio: 1.618,
          }}
          responsive
          data={chartData}
        >
          <Tooltip
            contentStyle={{
              background: "#2a3447",
              borderRadius: "5px",
            }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </div>
    </div>
  );
};

export default React.memo(BarChartBox);

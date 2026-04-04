import {
  PieChart,
  Pie,
  Sector,
  type PieSectorShapeProps,
  Tooltip,
} from "recharts";
import "./pieChartBox.scss";
import React from "react";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "url(#pattern-checkers)",
];

const MyCustomPie = (props: PieSectorShapeProps) => (
  <Sector {...props} fill={colors[props.index % colors.length]} />
);

const PieChartBox = ({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) => {
  return (
    <div className="pieChartBox">
      <h2>Leads by Source</h2>

      <div className="chart">
        <PieChart
          style={{
            width: "99%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Tooltip
            contentStyle={{
              background: "#fff",
              borderRadius: "5px",
            }}
            position={{ x: 5, y: 20 }}
          />
          <Pie
            data={data}
            shape={MyCustomPie}
            innerRadius={"70%"}
            outerRadius={"90%"}
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          ></Pie>
        </PieChart>
      </div>

      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ background: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PieChartBox);

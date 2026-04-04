import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "./single.scss";

type SingleProps = {
  id?: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { text: string; time: string }[];
};

const Single = ({ img, title, info, chart, activities }: SingleProps) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="" loading="lazy" />}
            <h2>{title}</h2>
            <button>Update</button>
          </div>

          <div className="details">
            {/* Transforming Object to an Array with Object.entries(object name) */}
            {Object.entries(info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}: </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <hr />

        {chart && (
          <div className="chart">
            <LineChart
              style={{
                width: "99%",
                maxWidth: "700px",
                height: "100%",
                maxHeight: "70vh",
                aspectRatio: 1.618,
              }}
              data={chart?.data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chart.dataKeys.map((dataKey) => (
                <Line
                  key={dataKey.name}
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                  activeDot={{ r: 8 }}
                  // activeDot={{ stroke: "#8884d8" }}
                />
              ))}
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </div>
        )}
      </div>

      <div className="activities">
        <h2>Last Activities</h2>
        {activities && (
          <ul>
            {activities.map((activity) => (
              <li key={activity.text}>
                <div className="activitiesContent">
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;

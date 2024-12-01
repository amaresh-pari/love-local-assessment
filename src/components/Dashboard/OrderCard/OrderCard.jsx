import "./orderCard.css";
import { PercentageTag } from '../../PercentageTag/PercentageTag';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from "recharts";

export const OrderCard = ({ data }) => {
  const transformedData = [];

  for (let i = 0; i < data.graphData.current.length; i++) {
    transformedData.push({
      current: data.graphData.current[i],
      previous: data.graphData.previous[i],
      date:
        i === 0
          ? data.fromDate
          : i === data.graphData.current.length - 1
          ? data.toDate
          : null,
    });
  }

  const xAxisTicks = [data.fromDate, data.toDate];

  return (
    <div className="order-container">
      <p className="order-title">AVG Order Value</p>
      <div className="horizontal-line" />

      <div className="order-group">
        <div className="order-value-wrap">
          <p className="order-value">{data.total}</p>
          <PercentageTag percentage={data.percentageDifference} />
        </div>

        <div className="order-value-wrap">
          <div className="order-chart-legend-wrap">
            <img
              src="src/assets/blue_circle.png"
              className="order-chart-key-icon"
            />
            <p className="order-chart-key-text">Current</p>
          </div>

          <div className="order-chart-legend-wrap">
            <img
              src="src/assets/gray_circle.png"
              className="order-chart-key-icon"
            />
            <p className="order-chart-key-text">Previous</p>
          </div>
        </div>
      </div>

      <div className="order-chart-wrap">
        <ResponsiveContainer height={250}>
          <AreaChart data={transformedData}>
            <YAxis />
            <XAxis dataKey="date" ticks={xAxisTicks} />
            <Area
              type="linear"
              dataKey="current"
              stackId="1"
              stroke="#CBD5E1"
              fill="#3B82F614"
            />
            <Area
              type="linear"
              dataKey="previous"
              stackId="1"
              stroke="#6366F1"
              fill="#3B82F614"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

import "./salesCard.css";
import { PercentageTag } from '../../PercentageTag/PercentageTag';
import { formatToLocaleString } from "../../../utils/numberFormat";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export const SalesCard = ({ logoSrc, saleType, data }) => {
  const graphData = data.graphData;
  const transformedGraphData = graphData.map((value, _) => ({ value }));

  return (
    <div className="card-container">
      <div className="logo-wrap">
        <img src={logoSrc} className="sales-icon" />
        <img src="src/assets/options.png" className="sales-icon" />
      </div>

      <p className="sale-type">{saleType}</p>
      <p className="sales-text">Sales</p>

      <div className="sales-wrap">
        <p className="total-sales">{formatToLocaleString(data.totalSales)}</p>
        <PercentageTag percentage={data.percentageDifference} />
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer height={100}>
          <AreaChart data={transformedGraphData}>
            <Area
              type="linear"
              dataKey="value"
              stroke="#6366F1"
              fill="#3B82F614"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

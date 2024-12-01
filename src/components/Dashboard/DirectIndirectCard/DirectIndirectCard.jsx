import "./directIndirectCard.css";
import { formatToCrore } from "../../../utils/numberFormat";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const DirectIndirectCard = ({ data }) => {
  const transformedData = data.graphData.map((item) => ({
    month: item.month,
    direct: item.direct / 100000,
    indirect: item.indirect / 100000,
  }));

  return (
    <div className="direct-indirect-container">
      <p className="direct-indirect-title">Direct Vs Indirect</p>
      <div className="horizontal-line" />

      <div className="group-wrap">
        <div className="group">
          <img className="chart-key-icon" src="src/assets/blue_circle.png" />
          <p className="direct-indirect-value">
            {formatToCrore(data.totalSalesDirect)}
          </p>
          <p className="direct-indirect-type">Direct</p>
        </div>

        <div className="group">
          <img
            className="chart-key-icon"
            src="src/assets/light_blue_circle.png"
          />
          <p className="direct-indirect-value">
            {formatToCrore(data.totalSalesIndirect)}
          </p>
          <p className="direct-indirect-type">Indirect</p>
        </div>
      </div>

      <div className="direct-indirect-chart-wrap">
        <ResponsiveContainer height={250}>
          <BarChart data={transformedData}>
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `${value} L`} />
            <Bar dataKey="direct" fill="#6366F1" barSize={20} />
            <Bar dataKey="indirect" fill="#38BDF8" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

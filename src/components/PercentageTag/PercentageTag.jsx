import "./percentageTag.css";

export const PercentageTag = ({ percentage }) => {
  const value = percentage > 0 ? `+${percentage}%` : `${percentage}%`;
  return (
    <div
      style={{ backgroundColor: percentage > 0 ? "#10B981" : "#F59E0B" }}
      className="percentage-container"
    >
      <p className="percentage-text">{value}</p>
    </div>
  );
};

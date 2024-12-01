import "./leftNavBar.css";
import { Tile } from "./Tile";

export const LeftNavBar = ({ currentPage }) => {
  return (
    <div className="container">
      <img src="src/assets/nav.png" className="icon" />
      <p className="title">PAGES</p>
      <Tile
        imgSrc="src/assets/dashboard.png"
        pageName="Dashboard"
        currentPage={currentPage}
      />
      <Tile
        imgSrc="src/assets/customers.png"
        pageName="Customers"
        currentPage={currentPage}
      />
    </div>
  );
};

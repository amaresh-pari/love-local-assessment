import { useState, useEffect } from "react";
import { LeftNavBar } from "../../components/LeftNavBar/LeftNavBar";
import { TopBar } from "../../components/TopBar/TopBar";
import { Container } from "../../components/Container/Container";
import "./dashboard.css";
import { Button, DatePicker, notification, Spin } from "antd";
import { SalesCard } from "../../components/Dashboard/SalesCard/SalesCard";
import {
  fetchOrderValue,
  fetchRevenue,
  fetchSales,
} from "../../services/dashboardApi";
import { DirectIndirectCard } from "../../components/Dashboard/DirectIndirectCard/DirectIndirectCard";
import { OrderCard } from "../../components/Dashboard/OrderCard/OrderCard";

const { RangePicker } = DatePicker;

export const Dashboard = () => {
  const [salesData, setSalesData] = useState({});
  const [revenueData, setRevenueData] = useState({});
  const [orderValueData, setOrderValueData] = useState({});

  const getSalesData = async () => {
    try {
      const data = await fetchSales();
      setSalesData(data);
    } catch (err) {
      notification.error({
        message: "Something went wrong",
        description: err,
      });
    }
  };

  const getRevenueData = async () => {
    try {
      const data = await fetchRevenue();
      setRevenueData(data.directIndirectInfo);
    } catch (err) {
      notification.error({
        message: "Something went wrong",
        description: err,
      });
    }
  };

  const getOrderValue = async () => {
    try {
      const data = await fetchOrderValue();
      setOrderValueData(data.averageOrderValueInfo);
    } catch (err) {
      notification.error({
        message: "Something went wrong",
        description: err,
      });
    }
  };

  useEffect(() => {
    getSalesData();
    getRevenueData();
    getOrderValue();
  }, []);

  if (
    Object.keys(salesData).length === 0 ||
    Object.keys(revenueData).length === 0 ||
    Object.keys(orderValueData).length === 0
  ) {
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  }

  return (
    <div>
      <LeftNavBar currentPage={"Dashboard"} />
      <Container>
        <TopBar />
        <div className="page-content">
          <div
            style={{ backgroundImage: `url('src/assets/banner_bg.png')` }}
            className="image-background"
          >
            <p className="banner-text">{`Good afternoon, ${salesData.userDetails.name} 👋`}</p>
            <p className="sub-text">Here is what’s happening today</p>
          </div>

          <div className="top-content-wrap">
            <img src="src/assets/team.png" className="team" />
            <div className="date-wrap">
              <Button className="button">
                <img src="src/assets/filter.png" className="filter-icon" />
              </Button>
              <RangePicker />
            </div>
          </div>

          <div className="sales-card-wrap">
            <SalesCard
              logoSrc="src/assets/retailee_logo.png"
              saleType="Retailee"
              data={salesData.retailerInfo}
            />
            <SalesCard
              logoSrc="src/assets/customer_logo.png"
              saleType="Customer"
              data={salesData.customerInfo}
            />
            <SalesCard
              logoSrc="src/assets/key_account_logo.png"
              saleType="key Account"
              data={salesData.keyAccountInfo}
            />
          </div>

          <div className="sales-card-wrap">
            <DirectIndirectCard data={revenueData} />
            <OrderCard data={orderValueData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

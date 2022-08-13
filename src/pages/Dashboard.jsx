import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/box/Box";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox, {
  SummaryBoxNumber,
  SummaryBoxSpecial,
} from "../components/summary-box/SummaryBox";
import { colors, data } from "../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../components/overall-list/OverallList";
import UsageList from "../components/usage/UsageList";
import UserInfo from "../components/user-info/UserInfo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  {item.type === "number" ? (
                    <SummaryBoxNumber item={item} />
                  ) : (
                    <SummaryBox item={item} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.studentSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <StudentsByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div style={{ paddingBottom: "15px", borderBottom: "1px solid #fff" }}>
          <UserInfo data={data.user} />
        </div>
        <div className="title mb" style={{ margin: "20px 0" }}>
          Overall
        </div>
        <div className="mb">
          <OverallList />
        </div>
        <div className="title mb">App Marketting Sources</div>
        <div className="mb">
          <UsageList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

export default Dashboard;

const StudentsByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.accent,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.studentsByMonths.labels,
    datasets: [
      {
        label: "Students",
        data: data.studentsByMonths.data,
      },
      {
        label: "Buses",
        data: data.studentsByMonths.buses,
      },
    ],
  };
  return (
    <>
      <div className="title mb">Students in routes</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};

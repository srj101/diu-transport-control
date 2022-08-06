import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Login from "./pages/Login";
import Main from "./pages/Dashboard/Main";
import Employees from "./pages/Dashboard/Employees";
import BusTickets from "./pages/Dashboard/BusTickets";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Main title="Dashboard | Main" />} />
        <Route
          path="Employees"
          element={<Employees title="Dashboard | Employees" />}
        />
        <Route
          path="busTickets"
          element={<BusTickets title="Dashboard | Tickets" />}
        />
      </Route>
      <Route path="login" element={<Login title="DIU Transport | Login" />} />
      <Route path="*" element={`Not Found`} />
    </Routes>
  );
}

export default App;

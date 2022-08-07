import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Login from "./layout/Login";
import { useEffect } from "react";
import Staffs from "./pages/Staffs";

function App() {
  useEffect(() => {
    document.title = "DIU Transport | Dashboard";
    return;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tickets" element={<Blank />} />
          <Route path="routes" element={<Blank />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
        <Route path="login" element={<Login title="DIU Transport | Login" />} />
        <Route path="*" element={`Not Found`} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

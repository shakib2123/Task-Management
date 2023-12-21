import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="lg:flex mx-auto">
        <div className="">
          <Sidebar />
        </div>
        <div className="z-10  pt-4 px-4 lg:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = () => {
  return (
    <div className="flex bg-[#0F0F14] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

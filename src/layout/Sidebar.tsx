import { NavLink, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  ShoppingOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/", icon: <DashboardOutlined /> },
  { name: "Technicians", path: "/technicians", icon: <ShoppingOutlined /> },
  { name: "Worklists", path: "/worklists", icon: <BarChartOutlined /> },
  { name: "Settings", path: "/settings", icon: <SettingOutlined /> },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-64 bg-[#16161D] p-6 text-white min-h-screen">
      <h1 className="text-xl font-bold mb-8">Elrado Admin Panel</h1>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const isDashboard = item.name === "Dashboard";
          const isActive = isDashboard
            ? pathname === "/" || pathname === "/dashboard"
            : pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-[#22222B]"
              }`}
            >
              {item.icon}
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

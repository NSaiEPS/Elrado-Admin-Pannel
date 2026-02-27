import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Technicians from "./pages/Technicians";
import Worklists from "./pages/Worklists";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "technicians", element: <Technicians /> },
      { path: "worklists", element: <Worklists /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// Old method

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<MainLayout />}>
//       <Route index element={<Navigate to="/dashboard" />} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="technicians" element={<Technicians />} />
//       <Route path="worklists" element={<Worklists />} />
//       <Route path="settings" element={<Settings />} />
//     </Route>
//   </Routes>
// </BrowserRouter>

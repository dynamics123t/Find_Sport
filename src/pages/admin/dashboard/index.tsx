import Dashboard from "@/components/DashboardAdmin/Dashboard";
import UserManagement from "@/components/DashboardAdmin/UserManagement";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <Dashboard />
      <UserManagement></UserManagement>
    </div>
  );
};

export default dashboard;

import Dashboard from "@/components/DashboardAdmin/Dashboard";
import SportManagement from "@/components/DashboardAdmin/SportManagement";
import UserManagement from "@/components/DashboardAdmin/UserManagement";
import PopupMessage from "@/components/Popup/PopupMessage";
import React, { useState } from "react";

const sportmanagement = () => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div>
      <Dashboard />
      <SportManagement></SportManagement>
    </div>
  );
};

export default sportmanagement;

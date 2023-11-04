import Dashboard from "@/components/DashboardAdmin/Dashboard";
import UserManagement from "@/components/DashboardAdmin/UserManagement";
import PopupMessage from "@/components/Popup/PopupMessage";
import React, { useState } from "react";

const dashboard = () => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div>
      <Dashboard />
      <UserManagement></UserManagement>
      {/* <PopupMessage
        maxWidth="max-w-[700px]"
        isOpen={isPopup}
        onCLickOutSide={() => setPopup(false)}
      >
        <div className="w-[600px]">111</div>
      </PopupMessage> */}
    </div>
  );
};

export default dashboard;

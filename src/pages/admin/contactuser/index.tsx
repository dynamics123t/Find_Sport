import Dashboard from "@/components/DashboardAdmin/Dashboard";
import UserContact from "@/components/DashboardAdmin/UserContact";
import PopupMessage from "@/components/Popup/PopupMessage";
import React, { useState } from "react";

const contactuser = () => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div>
      <Dashboard />
      <UserContact />
    </div>
  );
};

export default contactuser;

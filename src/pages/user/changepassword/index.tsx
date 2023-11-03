import ChangePassword from "@/components/Changepassword/ChangePassword";
import Footer from "@/components/Footer/footer";
import HeaderAuth from "@/components/Headder/headerAuth";
import React from "react";

const Changepassword = () => {
  return (
    <div>
      <HeaderAuth></HeaderAuth>
      <ChangePassword />
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Changepassword;

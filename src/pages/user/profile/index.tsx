import Footer from "@/components/Footer/footer";
import HeaderAuth from "@/components/Headder/headerAuth";
import ProfileUser from "@/components/ProfileUser/ProfileUser";
import React from "react";

const profileUser = () => {
  return (
    <div>
      <HeaderAuth></HeaderAuth>
      <ProfileUser />
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default profileUser;

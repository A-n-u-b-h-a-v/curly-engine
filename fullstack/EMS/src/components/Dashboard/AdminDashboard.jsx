import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";

const AdminDashboard = ({data, changeUser,}) => {
  
  
  return (
    <div className="h-screen w-full text-white">
      <Header changeUser={changeUser} admindata={data}/>
      <Createtask/>
    </div>
  );
};

export default AdminDashboard;

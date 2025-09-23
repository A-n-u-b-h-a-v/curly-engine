import React from "react";

import TaskNumberList from "../other/TaskNumberList";
import TaskList from "../TaskList/TaskList";
import Header from "../other/Header";

const EmployeeDashboard = ({data,changeUser}) => {
  
  
  return (
    <div className="h-screen">
      
      <Header changeUser={changeUser} employeedata={data}/>

      <TaskNumberList data={data}/>

      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;

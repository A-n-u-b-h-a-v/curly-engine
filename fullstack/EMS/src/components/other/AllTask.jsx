import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext);
  

  return (
    <div>
      <div className="TaskList mx-10 p-5 gap-5 bg-neutral-800 flex flex-col overflow-x-auto h-52 text-lg font-medium ">
        <div
          className={` flex rounded-lg justify-between p-4 bg-red-400 items-center sticky -top-5 `}
        >
          <h2 className="w-1/5 ">Employee Name</h2>
          <h2 className="w-1/5 ">New Task</h2>
          <h2 className="w-1/5 ">Active Task</h2>
          <h2 className="w-1/5 ">Completed Task</h2>
          <h2 className="w-1/5 ">Failed Task</h2>
        </div>
        {userData.map((employee, index) => (
          <div key={index} className="flex justify-between items-center p-4 rounded-lg border-2 border-slate-400 ">
            <h2 className="w-1/5">{employee.name}</h2>
            <h2 className="w-1/5 ps-2 text-blue-400">{employee.taskCount.newTask}</h2>
            <h2 className="w-1/5 ps-2 text-yellow-400">{employee.taskCount.active}</h2>
            <h2 className="w-1/5 ps-2 text-green-400">{employee.taskCount.completed}</h2>
            <h2 className="w-1/5 ps-2 text-red-400">{employee.taskCount.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;

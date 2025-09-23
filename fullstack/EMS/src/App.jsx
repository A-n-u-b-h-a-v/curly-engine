import React, { useEffect, useContext, useState } from "react";
import Login from "./components/Auth/Login";
import "./App.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

function App() {
  // setLocalStorage()
  const [user,setuser] = useState(null);
  const [userData,setuserData] = useContext(AuthContext);

  const [LoggedUserData, setLoggedUserData] = useState(null);
  useEffect(() => {
    const loggedinUser = localStorage.getItem("loggedinUser");
    if (loggedinUser) {
      const userData = JSON.parse(loggedinUser);
      setuser(userData.role);
      setLoggedUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email=="admin@example.com" && password=="123") {
      setuser("admin");
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }));
    } 
    else if (userData && userData.find((e) => email == e.email && password == e.password)) {
      const employee = userData.find((e) => email == e.email && password == e.password);
      if (employee) {
        setuser("employee");
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedinUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {

      alert("Invalid Credential");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setuser} data={user}/>
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setuser} data={LoggedUserData} />
      ) : null}
    </>
  );
}

export default App;

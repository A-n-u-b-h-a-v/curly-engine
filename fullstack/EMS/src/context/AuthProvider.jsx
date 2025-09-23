import { React, createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState("");
  useEffect(() => {
    const {employee}  = getLocalStorage();
    setuserData(employee);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

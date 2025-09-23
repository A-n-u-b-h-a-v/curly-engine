import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  function submitHandler(value) {
    value.preventDefault();
    handleLogin(Email,Password)
    SetEmail('')
    SetPassword('')
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className=" flex w-full items-center justify-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex border-2 border-emerald-600 rounded-md w-1/3 flex-col items-center justify-center py-32   gap-5"
          action=""
          method=""
        >
          <input
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            value={Email}
            required
            className="text-white border-2 rounded-full border-emerald-600 px-5 py-3 text-xl outline-none bg-transparent placeholder:text-grey-400 w-3/4"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            value={Password}
            required
            className="text-white border-2 border-emerald-600 px-5 py-3 text-xl rounded-full  outline-none bg-transparent placeholder:text-grey-400 w-3/4"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <button
            className="text-black font-semibold border-2 rounded-full px-5 py-3 text-xl outline-none bg-white placeholder:text-grey-400 w-1/2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

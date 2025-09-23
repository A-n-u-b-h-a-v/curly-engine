import Quotes from "../components/Quotes"
import AuthInput from "../components/AuthInput"
import { useState } from "react"
import { SignupInput } from "@anubhav_gusain/medium-common"
import AuthHeader from "../components/AuthHeader"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../config"

const Signup = () => {
  const Navigate=useNavigate()
  async function signinRequest(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    try {
      const response=await axios.post(`${BASE_URL}/api/v1/user/signup`,postInput)
      localStorage.setItem("accessToken", response.data.jwt)
      Navigate("/blogs")
    }catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
      } else {
        console.log("An unexpected error occurred:", error)
      }
    }
  }
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });
  return (
    <div>
        <div  className="grid  lg:grid-cols-2 h-screen">
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white px-20">
        
        <AuthHeader type="signup"/>
            <div className="flex flex-col justify-center items-center gap-4 w-full ">
            <AuthInput
            label="Name"
            placeholder="Enter your name"
            value={postInput.name || ""}
            onChange={(e) => setPostInput({ ...postInput, name: e.target.value })}
          />
          <AuthInput
        label="Email"
        placeholder="Enter your email"
        inputType="email"
        value={postInput.email}
        onChange={(e) => setPostInput({ ...postInput, email: e.target.value })}
      />
      <AuthInput
        label="Password"
        placeholder="Enter your password"
        inputType="password"
        value={postInput.password}
        onChange={(e) => setPostInput({ ...postInput, password: e.target.value })}
      />
      <button onClick={signinRequest} className="cursor-pointer w-3/4 lg:w-full bg-black text-white font-semibold  py-3 rounded-md mt-5  ">Sign Up</button>
      
      
        </div>
      
      </div>
            <div className="hidden lg:flex ">
                <Quotes/>
            </div>
        </div>
    </div>
  )
}

export default Signup

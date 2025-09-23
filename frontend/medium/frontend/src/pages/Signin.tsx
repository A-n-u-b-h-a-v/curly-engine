import Quotes from "../components/Quotes"
import AuthInput from "../components/AuthInput"
import { useState } from "react"
import { SigninInput } from "@anubhav_gusain/medium-common"
import AuthHeader from "../components/AuthHeader"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../config"

const Signup = () => {
   const Navigate=useNavigate()
  async function signUpRequest(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try {
      const response=await axios.post(`${BASE_URL}/api/v1/user/signin`,postInput)
      if(localStorage.getItem("accessToken") === response.data.jwt){
        Navigate("/blogs")
      }else{
        console.log(response.data.error);
        
      }
    }catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
      } else {
        console.log("An unexpected error occurred:", error)
      }
    }
  }
  const [postInput, setPostInput] = useState<SigninInput>({
    email: "anu@gmail.com",
    password: "123456"
  });
  return (
    <div>
        <div  className="grid  lg:grid-cols-2 h-screen">
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white px-20">
        
        <AuthHeader type="signin"/>
            <div className="flex flex-col justify-center items-center gap-4 w-full ">
            
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
      <button  onClick={signUpRequest} className="cursor-pointer w-3/4 lg:w-full bg-black text-white font-semibold  py-3 rounded-md mt-5  ">Sign In</button>
      
      
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

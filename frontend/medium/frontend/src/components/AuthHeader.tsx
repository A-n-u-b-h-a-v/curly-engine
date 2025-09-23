import { Link } from 'react-router-dom'

const AuthHeader = ({type}:{type:"signup"|"signin"}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-2">Create an account</h1>
      {(type == "signup") ? <p className="text-lg text-slate-500 pb-10 ">Already have an account? <Link className="underline" to={"/signin"}>Login</Link></p> : <p className="text-lg text-slate-500 pb-10">Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>}
    </div>
  )
}

export default AuthHeader

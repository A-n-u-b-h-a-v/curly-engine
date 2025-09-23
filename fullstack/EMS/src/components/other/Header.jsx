import React from 'react'

const Header = ({admindata, employeedata,changeUser}) => {
  
  let data = admindata ? admindata : employeedata;
  
  function logoutUser(){
    localStorage.setItem("loggedinUser","")
    changeUser("")
  }

  return (
    <div className='flex p-10 items-center justify-between text-white'>
      <h1 className='text-2xl'>Hello <br /><span className='text-3xl capitalize'> {data.name ? data.name : data }👋</span> </h1>
      <button onClick={logoutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header;

import React from 'react'

const TaskNumberList = ({data}) => {
  return (
    <div className='px-5 flex w-screen gap-5 justify-between '>
      <div className='bg-yellow-400  p-5 rounded-xl w-[45%]'>
        <h2 className='text-white bg-inherit text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className=' text-white bg-inherit text-3xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-green-400  p-5 rounded-xl w-[45%]'>
        <h2 className='text-white bg-inherit text-2xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className=' text-white bg-inherit text-3xl font-semibold'>Completed Task</h3>
      </div>
      <div className='bg-red-400  p-5 rounded-xl w-[45%]'>
        <h2 className='text-white bg-inherit text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className=' text-white bg-inherit text-3xl font-semibold'>Failed Task</h3>
      </div>
      <div className='bg-blue-400  p-5 rounded-xl w-[45%]'>
        <h2 className='text-white bg-inherit text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className=' text-white bg-inherit text-3xl font-semibold'>Active Task</h3>
      </div>
    </div>
  )
}

export default TaskNumberList

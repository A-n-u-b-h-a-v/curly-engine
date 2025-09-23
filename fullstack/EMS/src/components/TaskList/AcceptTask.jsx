import React from 'react'
import { getRandomColorFromArray } from '../other/RandomColor'


const AcceptTask = ({data}) => {

  return (
    <div
      className={` p-5 w-[23%] h-full flex-shrink-0 rounded-lg bg-${getRandomColorFromArray()}-400 flex flex-col justify-between`}
    >
      <div>
      <div className="flex justify-between ">
        <h3 className="bg-red-600 px-3 py-1 h-fit rounded-md ">
          {data.category}
        </h3>
        <h3>{data.taskDate}</h3>
      </div>
      <div>
      <h1 className="mt-5 font-semibold text-2xl">{data.title}</h1>
      <p className="mt-3 text-sm font-thin">{data.description}</p>
      </div>
      </div>
      <div className="flex items-center justify-between text-white mb-5 ">
        <div className="rounded-md text-sm px-3 py-2 bg-emerald-600">Accept</div>
        <div className="rounded-md text-sm px-3 py-2 bg-red-600">Reject</div>
      </div>
    </div>
  );
};

export default AcceptTask;

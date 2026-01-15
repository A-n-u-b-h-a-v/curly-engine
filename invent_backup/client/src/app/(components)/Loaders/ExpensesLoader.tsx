import React from 'react'

const ExpensesLoader = () => {
  return (
    <div className="animate-pulse space-y-5">
  {/* HEADER */}
  <div className="mb-5 space-y-2">
    <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
  </div>

  {/* FILTERS */}
  <div className="flex flex-col md:flex-row justify-between gap-4">
    {/* FILTER BOX */}
    <div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6 space-y-4">
      <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
      <div className="space-y-4">
        <div className="h-10 w-full bg-gray-200 rounded"></div>
        <div className="h-10 w-full bg-gray-200 rounded"></div>
        <div className="h-10 w-full bg-gray-200 rounded"></div>
      </div>
    </div>

    {/* PIE CHART BOX */}
    <div className="flex-grow bg-white shadow rounded-lg p-6 h-[400px] flex items-center justify-center">
      <div className="h-64 w-64 rounded-full bg-gray-200"></div>
    </div>
  </div>
</div>

  )
}

export default ExpensesLoader

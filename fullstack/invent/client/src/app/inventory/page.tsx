'use client'
import React from 'react'
import { useGetProductsQuery } from '../state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Header from '../(components)/Header';

const columns:GridColDef[]=[
  { field:"productId", headerName:"ID", width:90 },
  { field:"name", headerName:"Product Name", width:200 },
  { field:"price", headerName:"Price", width:110, type:"number", valueGetter:(value,row)=>`${row.price}` },
  { field:"rating", headerName:"Rating", width:110, type:"number", valueGetter:(value,row)=>row.rating ? row.rating : "N/A" },
  { field:"stockQuantity", headerName:"Stock Quantity", width:150, type:"number" }
]

const Inventory = () => {
  const { data:products, isError , isLoading } = useGetProductsQuery();

  if (isError) {
    return <div className="text-center text-red-500 py-4">Failed to fetch products</div>
  }

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]"> 
  <Header name="Inventory"/> 
  <div className="flex-1">
    <DataGrid
      rows={products || []}
      columns={columns}
      getRowId={(row) => row.productId}
      checkboxSelection
      loading={isLoading}
      slotProps={{
        loadingOverlay: {
          variant: 'linear-progress',
          noRowsVariant: 'skeleton',
        },
      }}
      className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
    />
  </div>
</div>

  )
}

export default Inventory;

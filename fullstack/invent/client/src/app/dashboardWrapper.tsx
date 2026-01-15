"use client";

import React, { ReactNode } from "react";
import Sidebar from "./(components)/Sidebar/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import Navbar from "./(components)/Navbar/Navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  return (
    <div className="flex w-full min-h-screen bg-background text-text transition-colors duration-300 pe-5">
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-9 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => (
  <StoreProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </StoreProvider>
);

export default DashboardWrapper;

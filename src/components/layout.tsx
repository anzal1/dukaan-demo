import React from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1440px] h-[882px] relative  bg-neutral-50">
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};

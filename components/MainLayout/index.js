import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppMeta from "./AppMeta";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-ddev">
      <AppMeta></AppMeta>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};

export default MainLayout;

import React, { useState, createContext } from "react";
//create context

export const SidebarContext = createContext();
const SlibarProvider = ({ children }) => {
  //slibar state
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SlibarProvider;

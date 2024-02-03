import React, { useContext, useState } from "react";

const GlobalContext = React.createContext<any>({});

export const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {

  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};

import React, {createContext, useState } from "react";

export const addData = createContext();

const ContextProvide = ({ children }) => {
  const [useradd, setUserAdd] = useState("");
  return (
    <>
      <addData.Provider value={{ useradd, setUserAdd }}>
        {children}
      </addData.Provider>
    </>
  );
};

export default ContextProvide;

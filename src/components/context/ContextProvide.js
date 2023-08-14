import React, { createContext, useState } from "react";

export const addData = createContext();
export const updateData = createContext();
export const dltData = createContext();

const ContextProvide = ({ children }) => {
  const [useradd, setUserAdd] = useState("");
  const [update, setUpdate] = useState("");
  const [deletedata, setDLtdata] = useState("");
  return (
    <>
      <addData.Provider value={{ useradd, setUserAdd }}>
        <updateData.Provider value={{ update, setUpdate }}>
          <dltData.Provider value={{ deletedata, setDLtdata }}>
            {children}
          </dltData.Provider>
        </updateData.Provider>
      </addData.Provider>
    </>
  );
};

export default ContextProvide;

import React, { createContext, useState, useEffect } from "react";
export const Thetaskcontext = createContext();
const TaskContext = ({ children }) => {
  const [task, setTask] = React.useState(() => {
    const savecart = localStorage.getItem("Tasks");
    return savecart ? JSON.parse(savecart) : [];
  });
  const [thetask, setThetask] = React.useState([]);

  const [update, setUpdate] = useState({});

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(task));
  }, [task]);
  return (
    <div>
      <Thetaskcontext.Provider
        value={{ task, setTask, thetask, setThetask, update, setUpdate }}
      >
        {children}
      </Thetaskcontext.Provider>
    </div>
  );
};

export default TaskContext;

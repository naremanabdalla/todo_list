import React, { createContext, useState } from "react";
export const Thetaskcontext = createContext();
const TaskContext = ({ children }) => {
  const [task, setTask] = React.useState([
    // {
    //   id: 1,
    //   theTAsk: "addtasknotdone",
    //   done: false,
    //   update: false,
    //   delete: false,
    // },
    // { id: 2, theTAsk: "addtaskdone", done: true, update: false, delete: false },
  ]);
  const [thetask, setThetask] = React.useState([]);

  const [update, setUpdate] = useState({});
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

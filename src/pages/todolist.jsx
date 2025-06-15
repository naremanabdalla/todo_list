import React, { useContext, useEffect } from "react";
import { Thetaskcontext } from "../components/taskContext";
import AddTask from "../components/addTask";
import "./todolist.css";
import { Outlet } from "react-router";
import { NavLink, useLocation } from "react-router";
import { Calendar, CheckCircle, Circle, List, Menu, X } from "lucide-react";

const Todolist = () => {
  const { task, setThetask } = useContext(Thetaskcontext);
  const [applay, setApply] = React.useState("all");
  const [openmenue, setOpenmenue] = React.useState(true);
  const location = useLocation();

  let handelnotdone = task.filter((item) => {
    return item.done == false;
  });

  let handelDone = task.filter((item) => {
    return item.done == true;
  });
  useEffect(() => {
    if (applay == "notdone") {
      setThetask(handelnotdone);
    } else if (applay == "done") {
      setThetask(handelDone);
    } else if (applay == "all") {
      setThetask(task);
    }
  }, [applay, task, setThetask]);

  useEffect(() => {
    setOpenmenue(true);
  }, [location]);
  return (
    <div className={`app-container  relative  `}>
      <button
        onClick={() => setOpenmenue(!openmenue)}
        className={` lg:hidden fixed top-4 z-50 bg-white p-2 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out ${
          openmenue ? "left-4" : "left-60"
        }`}
      >
        {openmenue ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
      </button>
      <div
        className={`${
          openmenue ? "-translate-x-full hidden " : "translate-x-0"
        }   bg-white fixed w-64 shadow-lg border-r border-gray-200  lg:translate-x-0
         inset-y-0 left-0 transform transition-transform duration-300 ease-in-out lg:block lg:relative z-40
      `}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
        </div>
        <div className="p-4 space-y-2 ">
          <NavLink
            to="notdone"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-gray-200" : "hover:bg-gray-100"
              }`
            }
            onClick={() => {
              setApply("notdone");
            }}
          >
            <Circle className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-700"> Not Done</span>
          </NavLink>
          {/*  */}
          <NavLink
            to="done"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-gray-200" : "hover:bg-gray-100"
              }`
            }
            onClick={() => {
              setApply("done");
            }}
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-medium text-gray-700">Done</span>
          </NavLink>
          {/*  */}
          <NavLink
            to="all"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-gray-200" : "hover:bg-gray-100"
              }`
            }
            onClick={() => {
              setApply("all");
            }}
          >
            <List className="w-5 h-5 text-blue-500" />
            <span className="font-medium text-gray-700">All</span>
          </NavLink>
          {/*  */}
          <NavLink
            to="calender"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-gray-200" : "hover:bg-gray-100"
              }`
            }
            onClick={() => {
              setApply("calendar");
            }}
          >
            <Calendar className="w-5 h-5 text-purple-500" />

            <span className="font-medium text-gray-700">Calendar</span>
          </NavLink>
          <div className="">
            <AddTask />
          </div>
        </div>
      </div>

      <div className="main-content ">
        <div className="mt-10 lg:mt-1 bg-white rounded-lg shadow-sm border border-gray-200 ">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 capitalize">
              {applay === "notdone"
                ? "Not Done Tasks"
                : applay === "done"
                ? "Completed Tasks"
                : applay == "all"
                ? "All Tasks"
                : "calendar"}
            </h2>
            <p className="text-gray-600 mt-1">
              {" "}
              {`${
                applay === "notdone"
                  ? handelnotdone.length
                  : applay === "done"
                  ? handelDone.length
                  : applay == "all"
                  ? task.length
                  : "calendar"
              }`}{" "}
              tasks
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Todolist;

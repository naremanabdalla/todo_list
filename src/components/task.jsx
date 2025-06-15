import React, { useContext } from "react";
import { Thetaskcontext } from "./taskContext";
import Taskbtns from "./taskbtns";
import { Calendar, CheckCircle, Circle, Clock } from "lucide-react";
const Task = () => {
  const { thetask, task, setTask } = useContext(Thetaskcontext);

  return (
    <div>
      {thetask.map((item, index) => {
        return (
          <div
            key={index}
            className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors flex justify-between "
          >
            <div className="flex  ">
              <button>
                {item.done && (
                  <CheckCircle className="w-4 h-4 me-2 bg-green-500 rounded-xl" />
                )}
              </button>
              <button
                onClick={() => {
                  setTask(
                    task.map((taskitem) => {
                      return taskitem.id == item.id
                        ? { ...item, done: true }
                        : taskitem;
                    })
                  );
                }}
              >
                {!item.done && <Circle className="w-4 h-4 me-2" />}
              </button>
              <div>
                <p
                  className={`font-medium ${
                    item.done ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {item.theTAsk}
                </p>
                <div className="block flex items-center space-x-2 mt-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{item.date} </span>
                </div>
              </div>
            </div>
            <Taskbtns item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;

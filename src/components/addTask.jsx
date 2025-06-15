import React, { useContext, useEffect, useState } from "react";
import { Thetaskcontext } from "./taskContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./addTask.css"; // Import the CSS file
import { Plus } from "lucide-react";

const AddTask = () => {
  const { task, setTask } = useContext(Thetaskcontext);
  const [addtask, setAddtask] = useState("");
  const [nextID, setNextID] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(
      `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(startDate.getDate()).padStart(2, "0")}`
    );
  }, [startDate]);

  return (
    <div className="">
      <button
        onClick={() => {
          document.getElementById("my_modal_1").showModal();
        }}
        className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors  hover:bg-gray-100"
      >
        <Plus className="w-5 h-5 text-indigo-500" />
        <span className="font-medium text-gray-700"> Add New Task</span>
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-content">
          <h3 className="modal-title">Add New Task</h3>

          <div className="form-group">
            <label htmlFor="task-name" className="form-label">
              Task Name
            </label>
            <input
              id="task-name"
              type="text"
              placeholder="Enter task name"
              value={addtask}
              onChange={(e) => {
                setAddtask(e.target.value);
              }}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="task-date" className="form-label">
              Due Date
            </label>
            <DatePicker
              id="task-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="date-picker"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>

          <div className="modal-actions">
            <form method="dialog">
              <button
                className="cancel-button"
                onClick={() => {
                  setAddtask("");
                }}
              >
                Cancel
              </button>
              <button
                className="submit-button"
                onClick={() => {
                  if (addtask.trim()) {
                    setTask([
                      ...task,
                      {
                        id: nextID,
                        theTAsk: addtask,
                        done: false,
                        update: false,
                        delete: false,
                        date: formattedDate,
                      },
                    ]);
                    setNextID(nextID + 1);
                    setAddtask("");
                  }
                }}
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTask;

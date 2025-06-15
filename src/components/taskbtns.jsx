import React, { useContext } from "react";
import { Thetaskcontext } from "./taskContext";
import { Link } from "react-router";
import { Edit, Trash2, X, Save } from "lucide-react";

const Taskbtns = ({ item }) => {
  const { task, setTask, update, setUpdate } = useContext(Thetaskcontext);

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => {
            document.getElementById("my_modal_2").showModal();
            setUpdate(item);
          }}
          className="p-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
          title="Edit task"
        >
          <Edit className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            setTask(task.filter((taskitem) => taskitem.id != item.id));
          }}
          className="p-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200 hover:scale-105"
          title="Delete task"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Modern Modal */}
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box relative mx-auto bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
          {/* <div className="  text-white"> */}
            <div className=" px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                <Edit className="w-5 h-5 " />
                Edit Task
              </h3>
              <form method="dialog">
                <button 
                  type="submit"
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </form>
            {/* </div> */}
          </div>
          {/* Content */}
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Description
                </label>
                <input
                  value={update.theTAsk || ""}
                  onChange={(e) => {
                    setUpdate({ ...update, theTAsk: e.target.value });
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl  focus:ring-blue-500  transition-all duration-200 resize-none  text-gray-800 placeholder-gray-400"
                  placeholder="Enter your task description..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end">
            <form method="dialog">
              <button
                type="submit"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200"
              >
                Cancel
              </button>
            </form>
            <form method="dialog">
              <button
                type="submit"
                onClick={() => {
                  setTask(
                    task.map((item) =>
                      item.id == update.id ? { ...update } : item
                    )
                  );
                }}
                className="px-6 py-2  text-gray-900 rounded-lg font-medium flex items-center gap-2  hover:text-gray-800 hover:bg-gray-200"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* Backdrop */}
      </dialog>
    </>
  );
};

export default Taskbtns;

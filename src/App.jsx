// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import TaskContext from "./components/taskContext";
import Taskbtns from "./components/taskbtns";
import Todolist from "./pages/todolist";
import Calender from "./components/calender";
import Task from "./components/task";
function App() {
  return (
    <>
      <TaskContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todolist />}>
              <Route path="" element={<Task />}></Route>
              <Route path="notdone" element={<Task />}></Route>
              <Route path="done" element={<Task />}></Route>
              <Route path="all" element={<Task />}></Route>
              <Route path="addtask" element={<Task />}></Route>
              <Route path="calender" element={<Calender />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskContext>{" "}
    </>
  );
}

export default App;

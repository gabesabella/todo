import React, { ChangeEvent, FC, useState } from "react";
import "./index.css";
import { ITask } from "./interfaces";
import ToDoTask from "./components/ToDoTask";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";

// Main App should be defined as type Functional Component (FC)
const App: FC = () => {
  // Defining all states
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // Function for handling changes to state
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter(task => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className=" bg-slate-900 flex h-screen  justify-center overflow-auto p-7 md:p-0">
      <div className=" text-blue-400 text-3xl absolute bottom-0 pb-5 opacity-50 z-0">
        <div className="flex space-x-6">
          <span className="text-xl ">Built with </span>
          <FaReact />
          <SiTypescript />
          <SiTailwindcss />
          <span className="text-xl">&</span>
          <RxVercelLogo />
        </div>
      </div>
      <div className="header flex flex-col w-[380px] lg:w-[600px] z-10">
        <h1 className="text-white text-3xl py-10">Todo App</h1>
        <div className="input-container space-y-10">
          <div className="flex flex-col">
            <p className="text-gray-300">Enter a task</p>
            <input
              className="form-input"
              name="task"
              onChange={handleChange}
              type="text"
              value={task}
              placeholder="Task..."
            />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-300">Deadline (in Days)...</p>
            <input
              className=""
              name="deadline"
              onChange={handleChange}
              type="number"
              value={deadline}
              placeholder="Deadline (in Days)..."
            />
          </div>
          <button
            type="button"
            onClick={addTask}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
          <div className="todoList">
            {todoList.map((task: ITask, key: number) => {
              return (
                <ToDoTask key={key} task={task} completeTask={completeTask} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

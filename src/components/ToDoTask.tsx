import React from "react";
import { ITask } from "../interfaces";
import { FaBeer } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const ToDoTask = ({ task, completeTask }: Props) => {
  return (
    <div className=" text-gray-300">
      <div className="flex text-center my-7">
        <span className="basis-2/3 bg-green-900 p-2 text-left text-sm">
          {task.taskName}
        </span>
        <span className="basis-1/3 bg-indigo-900 p-2 text-sm">
          Due: {task.deadline} days
        </span>
        <button
          className="bg-red-900 px-2"
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          <AiFillDelete className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default ToDoTask;

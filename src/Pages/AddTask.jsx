import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Taskform from "../Components/Taskform";
import useTasks from "../hooks/useTasks";

export default function AddTask() {
  const { id } = useParams();
  const { tasks, addTask, EditTask } = useTasks();

  const [message, setMessage] = useState("");  // <-- message state

  const isEditing = Boolean(id);
  const existingTask = tasks.find(t => t.id == id);

  function handleSubmit(data) {
    if (isEditing) {
      EditTask(id, data);
      setMessage("Task updated successfully!");
    } else {
      addTask(data);
      setMessage("Task added successfully!");
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">
        {isEditing ? "Edit Task" : "Add New Task"}
      </h1>

      {message && (
        <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
          {message}
        </div>
      )}

      <Taskform onSubmit={handleSubmit} defaultValues={existingTask} />
    </div>
  );
}

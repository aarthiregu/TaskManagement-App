import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks(prev => [...prev, { id: Date.now(), ...task }]);
  }

  function EditTask(id, updatedTask) {
    setTasks(prev =>
      prev.map(t => (t.id == id ? { ...t, ...updatedTask } : t))
    );
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id != id));
  }

  return { tasks, addTask, EditTask, deleteTask };
}

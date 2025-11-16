import { useState, useEffect } from "react";

export default function Taskform({ onSubmit, defaultValues }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (defaultValues) {
      setName(defaultValues.name || "");
      setDescription(defaultValues.description || "");
    }
  }, [defaultValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, description });
    if (!defaultValues) {
      setName("");
      setDescription("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Name"
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        className="border p-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        {defaultValues ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

import { useNavigate } from "react-router-dom";
import TaskTable from "../Components/Tasktable";
import useTasks from "../hooks/useTasks";

export default function Tasks() {
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTasks();

  function handleEdit(id) {
    navigate(`/edit-task/${id}`);
  }

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Task List</h1>
      <button
        onClick={() => navigate("/add-task")}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Task
      </button>

      <TaskTable tasks={tasks} onEdit={handleEdit} onDelete={deleteTask} />
    </div>
  );
}

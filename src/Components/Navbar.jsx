import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">Task Management</h1>
      <div className="flex space-x-6">
        <Link to="/" className="text-red-400 hover:text-red-200">Dashboard</Link>
        <Link to="/tasks" className="text-green-400 hover:text-green-200">Tasks</Link>
        <Link to="/add-task" className="text-yellow-400 hover:text-yellow-200">Add Task</Link>
      </div>
    </nav>
  );
}

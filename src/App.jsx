import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import AddTask from "./Pages/AddTask";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<AddTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

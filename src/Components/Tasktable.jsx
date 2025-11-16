export default function Tasktable({ tasks, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white rounded-lg shadow">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Description</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map(task => (
          <tr key={task.id} className="border-b">
            <td className="p-3">{task.name}</td>
            <td className="p-3">{task.description}</td>
            <td className="p-3 text-center">
              <button
                onClick={() => onEdit(task.id)}
                className="px-3 py-1 bg-gray-200 mr-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

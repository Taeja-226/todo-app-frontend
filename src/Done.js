function Done(props) {


  const todoArr = props.todo;


  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">✅ Completed Tasks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 text-gray-800">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b">Todo Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b">Completed On</th>
            </tr>
          </thead>
          <tbody>
            {todoArr.filter(todo => todo.status === "completed").map((todo) => (
              <tr key={todo.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-center border-b">{todo.todoTitle}</td>
                <td className="px-6 py-4 text-center border-b">{todo.completionDate}</td>
              </tr>))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Done };

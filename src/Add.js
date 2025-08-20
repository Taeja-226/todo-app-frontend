import { useState } from "react";
import { callCreateAPI } from "./BackendAPI.js";
import {callGetALLAPI} from './BackendAPI.js';




function Add(props) {

  let setTodo = props.setTodo;
  let [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    status: "pending"
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    alert("Added Task " + JSON.stringify(formData));
    let newTodo = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.dueDate,
      status: 'pending'
    }
    await callCreateAPI('/create-todo', newTodo);
     setFormData({ todoTitle: "", dueDate: "", todoStatus: "" });

    //  get our todo again and set todo with setTodo
      const todoList = await callGetALLAPI('/read-all-todo')
      setTodo(todoList);

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Add Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-medium mb-1 text-black">Todo Title:</label>
          <input
            type="text"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={(e) => handleChange(e)}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={(e) => handleChange(e)}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={(e) => handleChange(e)}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            placeholder="e.g., Pending"

          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Add };

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appoinmant",
      day: "jan 1",
      reminder: true,
    },
    {
      id: 2,
      text: "meeting at airport",
      day: "jan 19",
      reminder: true,
    },
    {
      id: 3,
      text: "food shopping",
      day: "feb 2",
      reminder: false,
    },
  ]);
  //Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No task to show</h3>
      )}
    </div>
  );
}

export default App;

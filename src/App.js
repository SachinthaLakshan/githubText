//import React from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task1',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'task2',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'task3',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
    {
      id: 4,
      text: 'task4',
      day: '2020.02.12 2:30AM',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Traker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;

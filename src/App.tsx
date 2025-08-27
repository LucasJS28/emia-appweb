import { useEffect, useState } from 'react';
import { Task } from './types/Task';
import { getTasks, createTask } from './api/tasks';
import TaskForm from './components/TaskForm';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleAdd = async (title: string) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1>Mis Tareas</h1>
      <TaskForm onAdd={handleAdd} />
      <table className="tasks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Completada</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.completed ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Task } from './types/Task';
import { getTasks, createTask, updateTask } from './api/tasks';
import TaskForm from './components/TaskForm';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Cargar tareas al iniciar la app
  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  // Agregar nueva tarea
  const handleAdd = async (title: string) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  // Cambiar estado de completada al hacer click
  const handleToggleCompleted = async (task: Task) => {
    const updatedTask = await updateTask(task.id, !task.completed);
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
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
              <td
                className="completed-cell"
                style={{ cursor: 'pointer', textAlign: 'center' }}
                onClick={() => handleToggleCompleted(task)}
              >
                {task.completed ? '✅' : '❌'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

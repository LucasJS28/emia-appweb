import { useEffect, useState } from 'react';
import { Task } from './types/Task';
import { getTasks, createTask, updateTask } from './api/tasks';
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

  const handleToggle = async (task: Task) => {
    try {
      const updated = await updateTask(task.id, !task.completed);
      setTasks(tasks.map(t => (t.id === task.id ? updated : t)));
    } catch (error) {
      console.error('Error actualizando tarea:', error);
    }
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
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td
                style={{ cursor: 'pointer' }}
                onClick={() => handleToggle(task)}
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

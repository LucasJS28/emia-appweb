// src/api/tasks.ts
import axios from 'axios';
import { Task } from '../types/Task';

const BASE_URL = 'https://emia-api.vercel.app/api/tasks';

// Obtener todas las tareas
export const getTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

// Crear una nueva tarea
export const createTask = async (title: string): Promise<Task> => {
  const { data } = await axios.post(BASE_URL, { title });
  return data;
};

// Actualizar el estado de completada de una tarea
export const updateTask = async (id: number, completed: boolean): Promise<Task> => {
  const { data } = await axios.put(BASE_URL, { id, completed });
  return data;
};

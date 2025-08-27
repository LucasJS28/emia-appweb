import axios from 'axios';
import { Task } from '../types/Task';

const BASE_URL = 'https://emia-api.vercel.app/api/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const createTask = async (title: string): Promise<Task> => {
  const { data } = await axios.post(BASE_URL, { title });
  return data;
};

export const updateTask = async (id: number, completed: boolean): Promise<Task> => {
  const res = await fetch(`/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  return res.json();
};


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

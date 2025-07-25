import axios from "axios";
import type { User } from "../context/AppContext";

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Помилка при завантаженні користувача: ${error.message}`);
    }
    throw new Error("Невідома помилка");
  }
};
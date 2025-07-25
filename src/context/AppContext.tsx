import { createContext } from "react"

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export interface ContextInterface {
  user: User | null;
  setUser: (user: User) => void;
  theme: "light" | "dark";
  language: "en" | "uk";
}

const initialState: ContextInterface = {
  user: null,
  setUser: () => { },
  theme: "light",
  language: "en",
}

export const AppContext = createContext<ContextInterface>(initialState)
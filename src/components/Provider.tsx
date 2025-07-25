import { useState, type ReactNode } from "react"
import { AppContext, type User } from "../context/AppContext"

interface ProviderProps {
  children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const theme = "light";
  const language = "en";

  return (
    <AppContext.Provider value={{ user, setUser, theme, language }}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider
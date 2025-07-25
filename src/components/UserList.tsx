import { useContext, useEffect, useState } from "react"
import { AppContext, type User } from "../context/AppContext"
import UserProfile from "./UserProfile"
import { fetchUsers } from "../utils/api";
import React from "react";

const UserList = () => {
  const { setUser } = useContext(AppContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Список користувачів:</h2>
      {isLoading && <p>Завантаження...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setUser(user)}>{user.name}</button>
          </li>
        ))}
      </ul>

      <UserProfile />
    </div>
  )
}

export default React.memo(UserList)
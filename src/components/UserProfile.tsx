import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import React from "react";

const UserProfile = () => {
  const { user, theme, language } = useContext(AppContext);

  return (
    <div className="user-profile">
      <h3>Профіль користувача</h3>
      {user ? (
        <>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Theme:</strong> {theme}</p>
          <p><strong>Language:</strong> {language}</p>
        </>
      ) : (
        <p>Оберіть користувача зі списку</p>
      )}
    </div>
  )
}

export default React.memo(UserProfile)
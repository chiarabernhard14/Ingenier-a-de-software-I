import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  
  const addUser = () => {
    if (name.trim() === "") return;

    if (editingIndex !== null) {
      const updatedUsers = users.map((user, index) => 
        index === editingIndex ? name : user
      );
      setUsers(updatedUsers);
      setEditingIndex(null); 
      setName("");           
    } else {
      setUsers([...users, name]);
      setName("");
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  const editUser = (index) => {
    setName(users[index]); 
    setEditingIndex(index); 
  };

  return (
    <div className="crud-container">
      <h2 className="crud-title">React CRUD App</h2>
      
      <div className="input-group">
        <input 
          className="crud-input"
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Here" 
        />
        <button className="crud-button add" onClick={addUser}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="crud-list">
        {users.map((user, index) => (
          <li key={index} className="crud-item">
            <span className="crud-text">{user}</span>
            <div className="button-group">
              <button className="crud-button edit" onClick={() => editUser(index)}>
                Edit
              </button>
              <button className="crud-button delete" onClick={() => deleteUser(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

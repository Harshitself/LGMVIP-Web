import "./styles.css";
import "./Nav-style.css";
import React, { useState } from "react";

export default function App() {
  const [users, setusers] = useState([]);

  const loadusers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const Jsonresponse = await response.json();
    setusers(Jsonresponse.data);
  };

  return (
    <div className="App">
      <nav>
        <div class="navbar">
          <div class="logo">LGM</div>
          <button class="btn" onClick={loadusers}>
            Get Users
          </button>
        </div>
      </nav>
      <h1>Users : </h1>
      <div className="c-container">
        {users.map(({ id, avatar, email, first_name, last_name }) => (
          <div class="card">
            <img src={avatar} alt="Avatar"></img>
            <div class="container">
              <h4>
                <b> Name : {first_name + " " + last_name} </b>
              </h4>
              <h5>
                Email : <email>{email}</email>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/admin/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br/>
        <label>
          pass:
          <input
            type="text"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </label>
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem("email");
    if (session) {
      router.push("/faculty/Sidebar");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrors({ login: "Please enter email and password" });
      return;
    }

    const data = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/faculty/signin",
        data
      );
      if (response.data.message === "success") {
        sessionStorage.setItem("email", JSON.stringify(response.data));
        router.push("/faculty/Sidebar");
      } else {
        setErrors({ login: "Invalid email or password" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>
      {errors.login && <p className="text-red-500 mb-4">{errors.login}</p>}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Sign in
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <a href="/faculty/singup">Sign up</a>
      </button>
    </form>
  );
};

export default Login;

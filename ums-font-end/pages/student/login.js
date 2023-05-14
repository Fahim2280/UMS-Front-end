import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (session) {
      router.push('/student/homepage');
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const response = await axios.post('http://localhost:3000/logincon/signin', data);
      if (response.data.message === 'success') {
        sessionStorage.setItem('email', JSON.stringify(response.data));
        router.push('/student/homepage');
      } else {
        setErrors({ login: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      
    <h2 className="font-bold text-2xl">Log in to your student account</h2>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <label className="font-bold" htmlFor="email">Email:</label>
      <input
        className="p-2 border rounded"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col">
      <label className="font-bold" htmlFor="password">Password:</label>
      <input
        className="p-2 border rounded"
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handleInputChange}
      />
    </div>
    {errors.login && <p className="error">{errors.login}</p>}
    <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Sign in</button>
    <span class="text-gray-600 text-sm">Don't have an account? </span>

    <Link href="signup"> <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign up </button></Link>


  </form>
  </div>
  </section> 
  );
};

export default Login;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      {errors.login && <p className="error">{errors.login}</p>}
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;
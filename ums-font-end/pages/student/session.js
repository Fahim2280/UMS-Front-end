import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [email, setEmail] = useState(null);
    const router = useRouter();

  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('email');
          if (session) {
            setEmail(sessionStorage.getItem('email'));

          }          
      }

  }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:3000/logincon/signout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('http://localhost:7000/student/login');
          } catch (error) {
            console.error(error)
          }

  };

  return (
    <>
   
      {email !== null ? (
           <section className="bg-gray-50 dark:bg-gray-900">
           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign out</button>
          <Link className="text-blue-500 hover:text-blue-800" href="/student/homepage">homepage</Link>
        </div>
        </div>
        </section> 
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900">
           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/login">
          Sign in
        </Link>
        </div>
        </section> 
      )}
      
    </>
  );
  
}
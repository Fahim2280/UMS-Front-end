import Link from "next/link";
import Session from "./session";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const session = sessionStorage.getItem('email');
        if (session) {
          router.push('/student/homepage');
        }
      }, []);

  return (
    <>
          <section className="min-h-screen dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h1 className="text-4xl font-bold text-center mb-4">University Management System</h1>

              <div className="p-4">
                <h1 className="text-4xl font-bold">Welcome!</h1>
                <p className="text-lg font-medium mb-4">
                  Please sign up or log in to continue.
                </p>
                <div className="flex justify-center">
                  <Link href="signup">
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40">
                      Sign up
                    </button>
                  </Link>
                  <Link href="login">
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40">
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        <Session></Session>
        <style jsx>{`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    color: #2d3748;
    font-size: 3rem;
    text-align: center;
  }
  
  p {
    color: #4a5568;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  button {
    transition: all 0.2s ease-in-out;
    border-radius: 0.25rem;
    border: none;
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  
  button:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9fa6b2;
  }
  
  button:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  .w-40 {
    width: 10rem;
  }
  
  .bg-gradient-to-bl {
    background: linear-gradient(to bottom left, #4f46e5, #6b82d9);
  }
  
  .bg-gradient-to-br {
    background: linear-gradient(to bottom right, #4f46e5, #6b82d9);
  }
  
  .dark .bg-gradient-to-bl {
    background: linear-gradient(to bottom left, #1a202c, #2d3748);
  }
  
  .dark .bg-gradient-to-br {
    background: linear-gradient(to bottom right, #1a202c, #2d3748);
  }
`}
</style>
    </>
  );
}

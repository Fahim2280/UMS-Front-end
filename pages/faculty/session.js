import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Session() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // checks if the code is running on the client-side and not on the server-side.
      const session = sessionStorage.getItem("email");
      if (session) {
        setEmail(sessionStorage.getItem("email"));
      }
    }
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/faculty/signout");
      console.log(response.data);
      sessionStorage.removeItem("email");
      setEmail(null);
      router.push("http://localhost:7000/faculty/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {email !== null ? (
        <>
          <button onClick={handleSignOut}>Sign out</button>
          <Link href="/faculty/Sidebar">homepage</Link>
        </>
      ) : (
        <Link href="/login">Sign in</Link>
      )}
    </>
  );
}

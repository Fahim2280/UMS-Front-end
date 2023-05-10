import { useState } from "react";
import axios from "axios";
import MyLayout from "./component/layout";
import { useRouter } from "next/router";
import Footer from "/pages/component/footer";
import Header from "/pages/component/header";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/admin/signin/", {
        email,
        pass,
      });
      console.log("res: " + response.data);

      sessionStorage.setItem("email", response.data);
      router.push("/admin/dashboard");
    } catch (error) {
      console.log("error22: " + error.message);
      setError("invalid login");
    }
  };

  return (
    <>
      <Header />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <form onSubmit={handleSubmit}>
            <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
          Sign
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            IN
          </mark>
        </h1>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label for="pass" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Sign In
              </button>
              {error && (
                <div>
                  <p
                    id="outlined_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span class="font-medium">{error}</span>
                  </p>
                </div>
              )}
          </form>
      </div>
      <Footer />
    </>
  );
}

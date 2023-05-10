import { useState } from "react";
import axios from "axios";
import MyLayout from "@/pages/component/layout";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import Footer from "../../../pages/component/footer";
import Header from "../../../pages/component/headerAdmin";

export default function DeleteStudent() {
  const [Sid, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/admin/deleteStudent/",
        { data: { Sid: Sid } }
      );
      setStatus(`Student with ID ${Sid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting student: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <div>
        <MyLayout title="Delete student" />

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Delete
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Student
            </mark>
          </h1>
          <div>
            <label
              htmlFor="Sid"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Student ID:
            </label>
            <input
              type="text"
              id="Sid"
              value={Sid}
              onChange={(e) => setStudentId(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <br />
          <div>{status}</div>
          {/* ...............update button..................... */}
          <br />
          <button
            onClick={handleDelete}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delete
            </span>
          </button>
          {/* ...............update button end..................... */}
        </div>

        <br />
        <br />
        {/* ...............back button..................... */}
        <button
          type="button"
          onClick={() => router.back()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-5 h-5"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
        {/* ...............back button end..................... */}
      </div>
      <Footer />
    </>
  );
}

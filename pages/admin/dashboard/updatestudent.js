import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentLayout from "@/pages/component/studentdata";
import SideBar from "../../component/sidebar";
import Footer from "../../component/footer";
import SessionCheck from "../../component/sessioncheck";

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const [Sid, setId] = useState("");
  const [Sidd, setIdd] = useState("");
  const [Sname, setName] = useState("");
  const [Sprogram, setProgram] = useState("");
  const [Sdep, setDep] = useState("");
  const [Saddress, setAddress] = useState("");
  const [Snum, setNum] = useState("");
  const [Sdob, setDob] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateStudent/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Sid,
          Sidd,
          Sname,
          Sprogram,
          Sdep,
          Saddress,
          Snum,
          Sdob,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setIdd("");
        setName("");
        setProgram("");
        setDep("");
        setAddress("");
        setNum("");
        setDob("");
      } else {
        setSuccessMessage("Student data updated successfully.");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
      setSuccessMessage("");
    }
  };

  // -----------------------------------------

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: "updatestudent",
      query: { inputValue: inputValue },
    });
  };

  return (
    <>
    <SessionCheck />
      <SideBar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <form onSubmit={handleFormSubmit}>
          {/* heading */}
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Search
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Student
            </mark>
          </h1>
          {/* heading end */}
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name:
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* ...............submit button..................... */}
          <br />
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Search
            </span>
          </button>
          {/* ...............submit button end..................... */}
        </form>
        {data.status == null ? <StudentLayout data={data} /> : data.status}
      </div>

      <form onSubmit={handleUpdateStudent}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <h1 class="mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
            Update
            <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Student
            </mark>
          </h1>
          {/* //-------------------------------------*/}
          <div>
            <label
              htmlFor="Sid"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ID:
            </label>
            <input
              type="number"
              id="Sid"
              value={Sid}
              onChange={(e) => setId(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Sidd"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Student ID:
            </label>
            <input
              type="number"
              id="Sidd"
              value={Sidd}
              onChange={(e) => setIdd(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Sname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="Sname"
              value={Sname}
              onChange={(e) => setName(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Sprogram"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Faculty:
            </label>
            <input
              type="text"
              id="Sprogram"
              value={Sprogram}
              onChange={(e) => setProgram(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Sdep"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Depertment:
            </label>
            <input
              type="text"
              id="Sdep"
              value={Sdep}
              onChange={(e) => setDep(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Saddress"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              address:
            </label>
            <input
              type="text"
              id="Saddress"
              value={Saddress}
              onChange={(e) => setAddress(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Snum"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number:
            </label>
            <input
              type="text"
              id="Snum"
              value={Snum}
              onChange={(e) => setNum(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div>
            <label
              htmlFor="Sdob"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Birth:
            </label>
            <input
              type="text"
              id="Sdob"
              value={Sdob}
              onChange={(e) => setDob(e.target.value)}
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <br />
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* ...............update button..................... */}
          <br />
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
          {/* ...............update button end..................... */}
        </div>
        {/* ...............back button..................... */}
        <button
          type="button"
          onClick={() => router.back()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
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
      </form>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
    const response = await axios.get(
      "http://localhost:3000/admin/findStudentname/" + inputValue
    );
    const data = await response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: { status: "Enter valid Student Name" },
      },
    };
  }
}

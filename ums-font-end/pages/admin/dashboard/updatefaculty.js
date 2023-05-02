import { useState } from "react";
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function UpdateStudent() {
    const router = useRouter();
  const [Fid, setId] = useState("");
  const [Fidd, setIdd] = useState("");
  const [Fname, setName] = useState("");
  const [Fprogram, setProgram] = useState("");
  const [Fdep, setDep] = useState("");
  const [Faddress, setAddress] = useState("");
  const [Fnum, setNum] = useState("");
  const [Fdob, setDob] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateFaculty/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Fid,Fidd, Fname, Fprogram, Fdep,Faddress,Fnum,Fdob}),
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
        setSuccessMessage("Faculty data updated successfully.");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleUpdateStudent}>
        <MyLayout title="Add Faculty"/>
      <h1>Update Faculty Data</h1>

      <label htmlFor="Fid">ID:</label>
      <input
        type="number"
        id="Fid"
        value={Fid}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <label htmlFor="Fidd">Faculty ID:</label>
      <input
        type="number"
        id="Fidd"
        value={Fidd}
        onChange={(e) => setIdd(e.target.value)}
      />
      <br/>

      <label htmlFor="Fname">Name:</label>
      <input
        type="text"
        id="Fname"
        value={Fname}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="Fprogram">Faculty:</label>
      <input
        type="text"
        id="Fprogram"
        value={Fprogram}
        onChange={(e) => setProgram(e.target.value)}
      />
      <br/>
      <label htmlFor="Fdep">Depertment:</label>
      <input
        type="text"
        id="Fdep"
        value={Fdep}
        onChange={(e) => setDep(e.target.value)}
      />
      <br/>
      <label htmlFor="Faddress">address:</label>
      <input
        type="text"
        id="Faddress"
        value={Faddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br/>
      <label htmlFor="Fnum">Number:</label>
      <input
        type="text"
        id="Fnum"
        value={Fnum}
        onChange={(e) => setNum(e.target.value)}
      />
      <br/>
      <label htmlFor="Fdob">Date of Birth:</label>
      <input
        type="text"
        id="Fdob"
        value={Fdob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br/>
      <button type="submit">Update</button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <br/>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <svg xmlns="http://www.w3.org/2000/svg"width="100%"height="100%"fill="none"viewBox="0 0 24 24"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="feather feather-chevron-left w-5 h-5"><polyline points="15 18 9 12 15 6"></polyline></svg><span class="sr-only">Icon description</span></button>

    </form>
    
  );
}

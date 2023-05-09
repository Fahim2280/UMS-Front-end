import { useState } from "react";
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function UpdateStudent() {
    const router = useRouter();
  const [Oid, setId] = useState("");
  const [Oidd, setIdd] = useState("");
  const [Oname, setName] = useState("");
  const [Odep, setDep] = useState("");
  const [Oaddress, setAddress] = useState("");
  const [Onum, setNum] = useState("");
  const [Odob, setDob] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateOfficer/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Oid,Oidd, Oname, Odep,Oaddress,Onum,Odob}),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setIdd("");
        setName("");
        setDep("");
        setAddress("");
        setNum("");
        setDob("");
      } else {
        setSuccessMessage("Officer data updated successfully.");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleUpdateStudent}>
        <MyLayout title="Update Officer"/>
      <h1>Update Officer Data</h1>

      <label htmlFor="Oid">ID:</label>
      <input
        type="number"
        id="Oid"
        value={Oid}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <label htmlFor="Oidd">Officer ID:</label>
      <input
        type="text"
        id="Oidd"
        value={Oidd}
        onChange={(e) => setIdd(e.target.value)}
      />
      <br/>

      <label htmlFor="Oname">Name:</label>
      <input
        type="text"
        id="Oname"
        value={Oname}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="Odep">Depertment:</label>
      <input
        type="text"
        id="Odep"
        value={Odep}
        onChange={(e) => setDep(e.target.value)}
      />
      <br/>
      <label htmlFor="Oaddress">address:</label>
      <input
        type="text"
        id="Oaddress"
        value={Oaddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br/>
      <label htmlFor="Onum">Number:</label>
      <input
        type="text"
        id="Onum"
        value={Onum}
        onChange={(e) => setNum(e.target.value)}
      />
      <br/>
      <label htmlFor="Odob">Date of Birth:</label>
      <input
        type="text"
        id="Odob"
        value={Odob}
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

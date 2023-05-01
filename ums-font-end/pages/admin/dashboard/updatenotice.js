import { useState } from "react";
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function UpdateStudent() {
    const router = useRouter();
  const [Nid, setId] = useState("");
  const [Nsub, setName] = useState("");
  const [Ndetails, setDep] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateNotice/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Nid, Nsub, Ndetails}),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setName("");
        setDep("");

      } else {
        setSuccessMessage("Notice data updated successfully.");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleUpdateStudent}>
        <MyLayout title="Update Notice"/>
      <h1>Update Notice Data</h1>

      <label htmlFor="Nid">Notice ID:</label>
      <input
        type="number"
        id="Nid"
        value={Nid}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <label htmlFor="Nsub">Notice Sub:</label>
      <input
        type="text"
        id="Nsub"
        value={Nsub}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="Ndetails">Notice:</label>
      <input
        type="text"
        id="Ndetails"
        value={Ndetails}
        onChange={(e) => setDep(e.target.value)}
      />
     
      <br/>
      <button type="submit">Update</button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <br/>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK</button>
    </form>
    
  );
}

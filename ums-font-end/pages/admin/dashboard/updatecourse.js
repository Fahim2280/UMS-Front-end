import { useState } from "react";
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function UpdateStudent() {
    const router = useRouter();
  const [Cid, setId] = useState("");
  const [Cname, setName] = useState("");
  const [credit, setDep] = useState("");
  const [room, setAddress] = useState("");
  const [time, setNum] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/admin/updateCourse/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Cid, Cname, credit,room,time}),
      });

      const data = await res.json();

      if (data.success) {
        setErrorMessage("");
        setId("");
        setName("");
        setDep("");
        setAddress("");
        setNum("");

      } else {
        setSuccessMessage("Course data updated successfully.");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleUpdateStudent}>
        <MyLayout title="Update Course"/>
      <h1>Update Course Data</h1>

      <label htmlFor="Cid">Course ID:</label>
      <input
        type="number"
        id="Cid"
        value={Cid}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <label htmlFor="Cname">Course Name:</label>
      <input
        type="text"
        id="Cname"
        value={Cname}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="credit">Credit:</label>
      <input
        type="text"
        id="credit"
        value={credit}
        onChange={(e) => setDep(e.target.value)}
      />
      <br/>
      <label htmlFor="room">Room:</label>
      <input
        type="text"
        id="room"
        value={room}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br/>
      <label htmlFor="time">Time:</label>
      <input
        type="text"
        id="time"
        value={time}
        onChange={(e) => setNum(e.target.value)}
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

import { useState } from "react";

export default function UpdateStudent() {
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
    </form>
    
  );
}

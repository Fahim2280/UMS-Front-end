import { useState } from "react";

export default function UpdateStudent() {
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
        body: JSON.stringify({ Sid,Sidd, Sname, Sprogram, Sdep,Saddress,Snum,Sdob}),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("Student data updated successfully.");
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
        setSuccessMessage("");
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong.");
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleUpdateStudent}>
      <h1>Update Student Data</h1>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <label htmlFor="Sid">ID:</label>
      <input
        type="number"
        id="Sid"
        value={Sid}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <label htmlFor="Sidd">Student ID:</label>
      <input
        type="number"
        id="Sidd"
        value={Sidd}
        onChange={(e) => setIdd(e.target.value)}
      />
      <br/>

      <label htmlFor="Sname">Name:</label>
      <input
        type="text"
        id="Sname"
        value={Sname}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="Sprogram">Faculty:</label>
      <input
        type="text"
        id="Sprogram"
        value={Sprogram}
        onChange={(e) => setProgram(e.target.value)}
      />
      <br/>
      <label htmlFor="Sdep">Depertment:</label>
      <input
        type="text"
        id="Sdep"
        value={Sdep}
        onChange={(e) => setDep(e.target.value)}
      />
      <br/>
      <label htmlFor="Saddress">address:</label>
      <input
        type="text"
        id="Saddress"
        value={Saddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br/>
      <label htmlFor="Snum">Number:</label>
      <input
        type="text"
        id="Snum"
        value={Snum}
        onChange={(e) => setNum(e.target.value)}
      />
      <br/>
      <label htmlFor="Sdob">Date of Birth:</label>
      <input
        type="text"
        id="Sdob"
        value={Sdob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br/>
      <button type="submit">Update</button>
    </form>
  );
}

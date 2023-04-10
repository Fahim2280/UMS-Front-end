import { useState, useEffect } from "react";

export default function Studentbyid() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [id, setSearchId] = useState("");

  const handleSearch = () => {
    setLoading(true);
    fetch(`http://localhost:3000/faculty/get/${id}`) // Update API endpoint with search ID
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data not Found!!!</p>;

  return (
    <>
      {/* Add search input and search button */}
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter Student ID"
      />
      <button onClick={handleSearch}>Search</button>
      <tbody>
        {data.map((grade) => (
          <tr key={grade.id}>
            <td>{grade.id}</td>
            <td>{grade.studentId}</td>
            <td>{grade.curseId}</td>
            <td>{grade.subject}</td>
            <td>{grade.grade}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

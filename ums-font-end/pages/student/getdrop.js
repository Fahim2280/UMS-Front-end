import { useState, useEffect } from "react";

export default function getissue() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/drop/index")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data not Found!!!</p>;
  return (
    <>
      <h2>Show All issues</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>application Status</th>
            <th>reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.Did}</td>
              <td>{student.applicationStatus}</td>
              <td>{student.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
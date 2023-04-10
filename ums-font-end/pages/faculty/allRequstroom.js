import { useState, useEffect } from "react";

export default function AllRequestRoom() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getrequestroom")
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
      <h2>Show All Request Room</h2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fid</th>
            <th>Room</th>
            <th>reason</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.Fid}</td>
              <td>{request.room}</td>
              <td>{request.reason}</td>
              <td>{request.date}</td>
              <td>{request.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

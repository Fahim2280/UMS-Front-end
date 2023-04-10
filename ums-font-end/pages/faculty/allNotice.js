import { useState, useEffect } from "react";

export default function AllNotice() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getnotice")
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
      <h2>All Notice</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Subject</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.id}</td>
              <td>{notice.subject}</td>
              <td>{notice.Details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

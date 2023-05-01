import { useState, useEffect } from "react";
import Link from "next/link";

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

  function handleSubmit(id) {
    const conf = window.confirm("Are you sure you want to delete?");
    if (conf == true) {
      fetch("http://localhost:3000/faculty/deletenotice/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data not Found!!!</p>;
  return (
    <>
      <h2>All Notice</h2>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Subject</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          {data.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.id}</td>
              <td>{notice.subject}</td>
              <td>{notice.Details}</td>
              <td>
                <Link href={`./updatenotice/${notice.id}`}>Update</Link>
                <button onClick={(e) => handleSubmit(notice.id)}>Delete</button>
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </>
  );
}


import { useState, useEffect } from "react";
import Link from "next/link";

export default function getissue() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/issue/index")
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
            <th>Issue Type</th>
            <th>Issue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.Isid}</td>
              <td>{student.issueType}</td>
              <td>{student.issue}</td>
              <td>
                {/* <Link href={`./updateIssue/${student.Isid}`}>Update</Link> */}

                <a href="./updateIssue/"><button type="submit">Update</button></a>
                <button onClick={e=> handleSubmit(student.Isid)}>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  function handleSubmit(Isid) {
    const conf=window.confirm("Are you sure you want to delete?");
    if(conf==true){
      fetch("http://localhost:3000/issue/deleteIssue/"+Isid,{
        method: "DELETE",
      }).then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    }
}
}




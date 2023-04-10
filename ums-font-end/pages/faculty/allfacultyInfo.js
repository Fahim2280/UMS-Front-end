import { useState, useEffect } from "react";

export default function AllFacultyInfo() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getall")
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
      <h2>Show All Faculty Info</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FIDD</th>
            <th>Name</th>
            <th>Department</th>
            <th>program</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Dath of Birth</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.Fid}</td>
              <td>{faculty.Fidd}</td>
              <td>{faculty.Fname}</td>
              <td>{faculty.Fdep}</td>
              <td>{faculty.Fprogram}</td>
              <td>{faculty.Faddress}</td>
              <td>{faculty.Fnum}</td>
              <td>{faculty.dob}</td>
              <td>{faculty.Fsal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

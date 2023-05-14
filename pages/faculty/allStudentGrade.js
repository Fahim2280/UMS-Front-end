import { useState, useEffect } from "react";

export default function AllStudentGrade() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getstudentgrade")
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
      <h2>Show All Student Grade</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Id</th>
            <th>Course Id</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
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
      </table>
    </>
  );
}

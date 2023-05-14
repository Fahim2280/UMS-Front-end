import { useEffect, useState } from 'react';
import SessionCheck from './sessioncheck';
import MyLayout from './layout';
const StudentIssues = () => {
  const [studentData, setStudentData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/student/getstudentissue/1'); 
      const data = await response.json();
      setStudentData(data[0]);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SessionCheck>
      <MyLayout/>
    <div>
      {studentData ? (
        <div>
          <h1>{studentData.Sname}</h1>
          <p>Department: {studentData.Sdep}</p>
          <p>ID: {studentData.Sidd}</p>
          <p>Address: {studentData.Saddress}</p>
          <p>Phone: {studentData.Snum}</p>
          <p>Program: {studentData.Sprogram}</p>
          <h2>Issues:</h2>
          <ul>
            {studentData.issues.map((issue) => (
              <li key={issue.Isid}>
                <h3>{issue.issueType}</h3>
                <p>{issue.issue}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    </SessionCheck>
  );
};

export default StudentIssues;

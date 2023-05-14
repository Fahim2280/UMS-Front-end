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
      <MyLayout />
      <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
       
      <div className="flex flex-col items-center justify-center mt-10">
        {studentData ? (
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-3xl font-bold text-blue-800">{studentData.Sname}</h1>
            <p className="text-lg text-gray-700">Department: {studentData.Sdep}</p>
            <p className="text-lg text-gray-700">ID: {studentData.Sidd}</p>
            <p className="text-lg text-gray-700">Address: {studentData.Saddress}</p>
            <p className="text-lg text-gray-700">Phone: {studentData.Snum}</p>
            <p className="text-lg text-gray-700">Program: {studentData.Sprogram}</p>
            <h2 className="text-2xl font-bold mt-6 mb-2 text-green-800">Issues:</h2>
            <ul className="list-disc list-inside">
              {studentData.issues.map((issue) => (
                <li key={issue.Isid}>
                  <h3 className="text-lg font-bold text-purple-800">{issue.issueType}</h3>
                  <p className="text-lg text-gray-700">{issue.issue}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-red-700">Loading data...</p>
        )}
      </div>
      </div>
        </section> 
    </SessionCheck>
  );
  
  
};

export default StudentIssues;

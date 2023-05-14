// import { useState, useEffect } from "react";

// export default function getstudent() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("http://localhost:3000/student/index")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading</p>;
//   if (!data) return <p>No Data</p>;

//   return (
//     <>
//       <h2>Show Students</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Staudent Id</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>Dath of Birth</th>
//             <th>Program</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((student) => (
//             <tr key={student.id}>
//               <td>{student.Sid}</td>
//               <td>{student.Sname}</td>
//               <td>{student.Sdep}</td>
//               <td>{student.Sidd}</td>
//               <td>{student.Saddress}</td>
//               <td>{student.Snum}</td>
//               <td>{student.Sdob}</td>
//               <td>{student.Sprogram}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }



import Link from "next/link"
// import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";


export default function getstudent({ data}) {


  return (
      <>
      <SessionCheck>
       Get students
      <ul>
        {data.map(item => (
          <li key={item.Sid}>

        <Link href={"/student/students/"+item.Sid}>{item.Sname}</Link>
            </li>
        ))}
      </ul>
      </SessionCheck>
    </>
  );
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/student/index');
      
      const data = await response.data;

  return { props: { data } }
  }
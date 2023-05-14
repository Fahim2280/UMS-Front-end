
// import { useState, useEffect } from "react";

// export default function getfeedback() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("http://localhost:3000/facfeedback/index")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>Data not Found!!!</p>;
//   return (
//     <>
//       <h2>Show All feedback</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>faculty feedback</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((student) => (
//             <tr key={student.id}>
//               <td>{student.Fdid}</td>
//               <td>{student.feedback}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }



// if(conf){
//   axios.delete("http://localhost:3000/drop/deletedrop/"+Did)
//   .then(res => {
//     alert('Deleted Successfully');
  
//   }).catch(err => console.log(err));

import Link from "next/link"
// import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";


export default function getfeedback({ data}) {


  return (
      <>
      <SessionCheck>
     <h2>Show All feedback</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>faculty feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.Fdid}</td>
              <td>{student.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </SessionCheck>
    </>
  );
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/facfeedback/index');
      
      const data = await response.data;

  return { props: { data } }
  }

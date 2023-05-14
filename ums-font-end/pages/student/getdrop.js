import axios from "axios";
import { useState } from "react";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getdrop({ data}) {
  const [dropData, setDropData] = useState(data);


  return (
      <>
      <SessionCheck/>
      <MyLayout/>
 <h2>Show All drop applications</h2>
       <table>
         <thead>
           <tr>
             <th>Id</th>
             <th>application Status</th>
             <th>reason</th>
           </tr>
         </thead>
         <tbody>
           {data.map((student) => (
            <tr key={student.id}>
              <td>{student.Did}</td>
              <td>{student.applicationStatus}</td>
              <td>{student.reason}</td>
              <td>
                <button onClick={(e)=> handleSubmit(student.Did)}>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  function handleSubmit(Did) {
    const conf=window.confirm("Are you sure you want to delete?");
    if(conf==true){
      fetch("http://localhost:3000/drop/deletedrop/"+Did,{
        method: "DELETE",
      }).then((res) => res.json())
      .then((data) => {
        setDropData(data);
      });
    }
}
}
  

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/drop/index');
      
      const data = await response.data;

  return { props: { data } }
 }
 
    
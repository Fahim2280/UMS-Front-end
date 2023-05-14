import axios from "axios";
import { useState } from "react";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getdrop({ data}) {
  const [dropData, setDropData] = useState(data);


  return (
    <>
      <SessionCheck>
      <MyLayout/>
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
      <h2 className="text-2xl font-bold mb-4">Show All drop applications</h2>
      <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-black" >Id</th>
            <th className="px-4 py-2 text-black">application Status</th>
            <th className="px-4 py-2 text-black">reason</th>
            <th className="px-4 py-2 text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="border border-gray-600">
              <td className="px-4 py-2">{student.Did}</td>
              <td className="px-4 py-2">{student.applicationStatus}</td>
              <td className="px-4 py-2">{student.reason}</td>
              <td className="px-4 py-2">
                <button 
                  onClick={(e)=> handleSubmit(student.Did)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </section> 
        </SessionCheck>
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

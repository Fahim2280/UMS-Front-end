// import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import { useState } from "react";
import SessionCheck from "../sessioncheck";
import MyLayout from "../layout";

export default function UserProfile({ data } ) {
const router = useRouter();
const [dropData, setDropData] = useState(data);

return (
  <>
    <SessionCheck>
      <MyLayout/>
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
      <ul className="divide-y divide-gray-200">
        {data.map((item) => (
          <li key={item.issueid} className="py-4 flex items-center justify-between">
            <div className="ml-4">
            <div className="text-base font-medium text-white">{item.issueType}</div>
            <div className="text-sm text-gray-300">{item.issue}</div>
            </div>
            <div className="flex ml-4">
              <button onClick={(e)=> handleSubmit(item.Isid)} className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
              <button onClick={() => router.push(`/student/updateIssue?Isid=${item.Isid}&issueType=${item.issueType}&issue=${item.issue}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>

      <br />
      <button type="button" onClick={() => router.back()} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Click here to go back
      </button>
      </div>
        </section>
    </SessionCheck>
  </>
);
        }

function handleSubmit(Isid) {
  const conf=window.confirm("Are you sure you want to delete?");
  if(conf==true){
    fetch("http://localhost:3000/issue/deleteissue/"+Isid,{
      method: "DELETE",
    }).then((res) => res.json())
    .then((data) => {
      setDropData(data);
    });
  }
}


 export async function getServerSideProps(context) {
 const id=context.params.issueid;

    const response = await axios.get('http://localhost:3000/issue/issuebyid/'+id);
    const data = await response.data;

return { props: { data } }
}
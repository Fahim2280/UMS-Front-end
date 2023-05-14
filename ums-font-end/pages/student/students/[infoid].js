import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck from "../sessioncheck";
import MyLayout from "../layout";

export default function UserProfile({ data } ) {
const router = useRouter();
return (
  <>
    <SessionCheck>
      <MyLayout/>
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Student Information</h1>
        <ul className="border border-gray-300 rounded-lg divide-y divide-gray-300">
          {data.map(item => (
            <li key={item.infoid} className="p-4">
              <div className="font-bold">Id:</div>
              <div>{item.Sid}</div>
              <div className="font-bold">Name:</div>
              <div>{item.Sname}</div>
              <div className="font-bold">Department:</div>
              <div>{item.Sdep}</div>
              <div className="font-bold">Student Id:</div>
              <div>{item.Sidd}</div>
              <div className="font-bold">Address:</div>
              <div>{item.Saddress}</div>
              <div className="font-bold">Phone:</div>
              <div>{item.Snum}</div>
              <div className="font-bold">Date of Birth:</div>
              <div>{item.Sdob}</div>
              <div className="font-bold">Program:</div>
              <div>{item.Sprogram}</div>
            </li>
          ))}
        </ul>
        <button 
          type="button" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
      </div>
        </section>
    </SessionCheck>
  </>
);

  }

 export async function getServerSideProps(context) {
 const id=context.params.infoid;

    const response = await axios.get('http://localhost:3000/student/getstudent/'+id);
    const data = await response.data;

return { props: { data } }
}
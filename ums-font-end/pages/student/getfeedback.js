import axios from "axios";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getfeedback({ data}) {


 return (
  <>
    <SessionCheck>
      <MyLayout/>
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
      <h2 className="text-2xl font-bold">Show All feedback</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Faculty Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.Fdid}</td>
              <td className="border px-4 py-2">{student.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </section> 
    </SessionCheck>
  </>
);

  
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/facfeedback/index');
      
      const data = await response.data;

  return { props: { data } }
  }

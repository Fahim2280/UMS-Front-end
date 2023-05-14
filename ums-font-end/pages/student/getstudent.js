import Link from "next/link"
import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";


export default function getstudent({ data}) {


  return (
    <>
      <SessionCheck>
        <MyLayout/>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-3xl font-bold mb-5">List of Students</h1>
        <ul class="space-y-2">
          {data.map(item => (
            <li key={item.Sid} class="bg-white shadow overflow-hidden rounded-md">
              <Link href={"/student/students/"+item.Sid} class="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                {item.Sname}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        </section>
      </SessionCheck>
    </>
  );
  
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/student/index');
      
      const data = await response.data;

  return { props: { data } }
  }
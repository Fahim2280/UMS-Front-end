import Link from "next/link"
import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";


export default function getissue({ data}) {


  return (
    <>
      <SessionCheck>
        <MyLayout/>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="p-8">
          <h2 class="text-xl font-bold mb-4">Get issue</h2>
          <ul class="list-disc ml-4">
            {data.map(item => (
              <li key={item.Isid}>
                <Link href={"/student/issues/"+item.Isid} class="text-blue-500 hover:underline">
                  Issue Type: {item.issueType}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </section>
      </SessionCheck>
    </>
  );
  
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/issue/index');
      
      const data = await response.data;

  return { props: { data } }
  }


import axios from "axios";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getgrade({ data}) {


  return (
    <>
      <SessionCheck>
        <MyLayout/>
        <section className="min-h-screen dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 className="text-2xl font-bold">Show All grades</h2>
            <table className="table-auto w-full mt-8">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Year</th>
                  <th className="px-4 py-2 text-left">Exam</th>
                  <th className="px-4 py-2 text-left">Grade</th>
                </tr>
              </thead>
              <tbody>
                {data.map((student) => (
                  <tr key={student.Gid}>
                    <td className="border px-4 py-2">{student.year}</td>
                    <td className="border px-4 py-2">{student.xm}</td>
                    <td className="border px-4 py-2">{student.grade}</td>
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

      const response = await axios.get('http://localhost:3000/grade/index');
      
      const data = await response.data;

  return { props: { data } }
  }

import axios from "axios";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getgrade({ data}) {


  return (
      <>
      <SessionCheck>
        <MyLayout/>
     <h2>Show All grades</h2>
      <table>
        <thead>
          <tr>
            <th>year</th>
            <th>exam</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.Gid}>
                <td>{student.year}</td>
              <td>{student.xm}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </SessionCheck>
    </>
  );
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/grade/index');
      
      const data = await response.data;

  return { props: { data } }
  }

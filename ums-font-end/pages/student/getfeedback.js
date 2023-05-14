import axios from "axios";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";


export default function getfeedback({ data}) {


  return (
      <>
      <SessionCheck>
        <MyLayout/>
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

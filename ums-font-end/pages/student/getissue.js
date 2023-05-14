import Link from "next/link"
// import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";


export default function getissue({ data}) {


  return (
      <>
      <SessionCheck>
       Get issue
      <ul>
        {data.map(item => (
          <li key={item.Isid}>

        <Link href={"/student/issues/"+item.Isid}> issue Type: {item.issueType}</Link>
            </li>
        ))}
      </ul>
      </SessionCheck>
    </>
  );
  }

 export async function getServerSideProps() {

      const response = await axios.get('http://localhost:3000/issue/index');
      
      const data = await response.data;

  return { props: { data } }
  }


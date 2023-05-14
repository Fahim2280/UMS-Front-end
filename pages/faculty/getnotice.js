import Link from "next/link";
// import MyLayout from "./layout";
import axios from "axios";
import SessionCheck from "./sessioncheck";

export default function getissue({ data }) {
  return (
    <>
    
        Get notice
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Link href={"/faculty/Notice/" + item.id}>
                issue Type: {item.subject}
              </Link>
            </li>
          ))}
        </ul>
     
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/faculty/getnotice");

  const data = await response.data;

  return { props: { data } };
}

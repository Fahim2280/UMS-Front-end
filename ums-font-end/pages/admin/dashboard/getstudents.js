import Link from "next/link"
import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'


export default function GetNotice({ data }) {
  const router = useRouter();
  return (
      <>
       <MyLayout title="Get Notice"/>
      <h1>All Students</h1>
      <ul>
        {data.map(item => (
          <li key={item.Sid}>
      
        {item.Sidd} | {item.Sname} | {item.Sprogram}  |  {item.Sdep}  |  {item.Snum}  |  {item.Saddress}  |  {item.Sdob}
            </li>
            
        ))}
      </ul>
      <button type="button" onClick={() => router.back()}>GO BACK </button>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/findallstudent/');
      const data = await response.data;
    
  return { props: { data } }
  }
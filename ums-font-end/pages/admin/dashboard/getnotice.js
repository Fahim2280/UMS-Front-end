import Link from "next/link"
import MyLayout from "@/pages/component/layout"
import axios from "axios";


export default function GetNotice({ data }) {
    
  return (
      <>
       <MyLayout title="Get Notice"/>
      <h1>All Notice</h1>
      <ul>
        {data.map(item => (
          <li key={item.Nid}>
      
        <Link href={"/admin/dashboard/users/"+item.Nid}>{item.Nsub}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/findallnotice/');
      const data = await response.data;
    
  return { props: { data } }
  }
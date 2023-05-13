// import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import { useState } from "react";


export default function UserProfile({ data } ) {
const router = useRouter();
const [dropData, setDropData] = useState(data);

    return (
      <>

 {data.map(item => (
          <li key={item.issueid}>
            Id:  {item.Isid}
            issue Type:{item.issueType}
            issue:{item.issue}
            <button onClick={(e)=> handleSubmit(item.Isid)}>Delete</button>
            <button onClick={() => router.push(`/student/updateIssue?Isid=${item.Isid}&issueType=${item.issueType}&issue=${item.issue}`)}>Update</button>


            </li>
               
        ))}


     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>

      </>
    )
    function handleSubmit(Isid) {
        const conf=window.confirm("Are you sure you want to delete?");
        if(conf==true){
          fetch("http://localhost:3000/issue/deleteissue/"+Isid,{
            method: "DELETE",
          }).then((res) => res.json())
          .then((data) => {
            setDropData(data);
          });
        }
    }
  }

 export async function getServerSideProps(context) {
 const id=context.params.issueid;

    const response = await axios.get('http://localhost:3000/issue/issuebyid/'+id);
    const data = await response.data;

return { props: { data } }
}
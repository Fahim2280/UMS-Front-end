
import axios from "axios";
import { useRouter } from 'next/router'

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
 {data.map(item => (
          <li key={item.infoid}>
            Id:  {item.Sid}
            Name:{item.Sname}
            Department:{item.Sdep}
            Staudent Id:{item.Sidd}
            Address:{item.Saddress}
            Phone:{item.Snum}
            Dath of Birth:{item.Sdob}
            Program:{item.Sprogram}
            {/* <button onClick={() => router.push(`/student/updateInfo?Isid=${item.Isid}&issueType=${item.issueType}&issue=${item.issue}`)}>Update</button> */}
            </li>
        ))}
          

     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>

      </>
    )
  }

 export async function getServerSideProps(context) {
 const id=context.params.infoid;

    const response = await axios.get('http://localhost:3000/student/getstudent/'+id);
    const data = await response.data;

return { props: { data } }
}
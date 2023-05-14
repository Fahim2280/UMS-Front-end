import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import SessionCheck from "../sessioncheck";

export default function UserProfile({ data }) {
  const router = useRouter();
  const [dropData, setDropData] = useState(data);

  return (
    <>
      {data.map((item) => (
        <li key={item.id}>
          Id: {item.id}
          subject:{item.subject}
          Details:{item.Details}
          <button onClick={(e) => handleSubmit(item.id)}>Delete</button>
          <button
            onClick={() =>
              router.push(
                `/faculty/updatenotice?id=${item.id}&subject=${item.subject}&Details=${item.Details}`
              )
            }
          >
            Update
          </button>
        </li>
      ))}

      <br></br>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  )
  
  function handleSubmit(id) {
    const conf = window.confirm("Are you sure you want to delete?");
    if (conf == true) {
      fetch("http://localhost:3000/faculty/deletenotice/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setDropData(data);
        });
    }
  }
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/faculty/getnoticebyId/" + id
  );
  const data = await response.data;

  return { props: { data } };
}

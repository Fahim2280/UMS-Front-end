// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function UpdateStudent({ data }) {
//   const [Saddress, setAddress] = useState(data.Saddress);
//   const [Snum, setNum] = useState(data.Snum);
//   const router = useRouter();

//   const handleUpdate = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/student/updatestudent/`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           Sid: data.Sid,
//           Saddress: Saddress,
//           Snum: Snum,
//         }),
//       });
//       if (res.ok) {
//         alert("Student information has been updated");
//         router.push("/student");
//       } else {
//         alert("Error updating student information");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h1>Update Student Information</h1>
//       <form>
//         <label>
//           Address:
//           <input
//             type="text"
//             name="Saddress"
//             value={Saddress}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </label>
//         <label>
//           Phone:
//           <input
//             type="text"
//             name="Snum"
//             value={Snum}
//             onChange={(e) => setNum(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleUpdate}>
//           Update
//         </button>
//       </form>
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const id = context.query.Sid;
//   const response = await fetch(`http://localhost:3000/student/getstudent/${id}`);
//   const data = await response.json();
//   return { props: { data } };
// }
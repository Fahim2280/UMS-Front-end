// import { useRouter } from "next/router";
// import { useState } from "react";
// import axios from "axios";
// import SessionCheck from "./sessioncheck";

// const UpdateNotice = () => {
//   const router = useRouter();
//   const [id, setid] = useState(router.query.id || "");
//   const [subject, setsubject] = useState(router.query.subject || "");
//   const [Details, setDetails] = useState(router.query.Details || "");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate form data here

//     try {
//       const response = await axios.put(
//         "http://localhost:3000/faculty/updatenotice",
//         {
//           id,
//           subject,
//           Details,
//         }
//       );
//       setSuccess("update successful"); // set success message
//       setError(null); // clear error message
//       router.push("http://localhost:7000/faculty/allNotice"); // redirect to getissue page
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message); // set error message
//       }
//     }
//   };

//   return (
//     // <SessionCheck>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="subject">Subject :</label>
//           <input
//             type="text"
//             name="subject"
//             id="subject"
//             value={subject}
//             onChange={(event) => setsubject(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="Details">Details:</label>
//           <textarea
//             name="Details"
//             id="Details"
//             value={Details}
//             onChange={(event) => setDetails(event.target.value)}
//           />
//           {error && <p className="error">{error}</p>}
//           {success && <p className="success">{success}</p>}
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     // </SessionCheck>
//   );
// };

// export default UpdateNotice;

// // export default function UpdateNotice() {
// //   return (
// //     <>
// //       <h2>Update Notice</h2>
// //       <form>
// //         <div>
// //           <label htmlFor=" id"> Id</label>
// //           <input type="text" name=" id" id=" id" />
// //         </div>
// //         <div>
// //           <label htmlFor=" subject"> Subject</label>
// //           <input type="text" name=" subject" id=" subject" />
// //         </div>
// //         <div>
// //           <label htmlFor=" Details"> Details</label>
// //           <input type="text" name=" Details" id=" Details" />
// //         </div>
// //         <button type="submit">Update Notice</button>
// //       </form>
// //     </>
// //   );
// // }


import { useState, useEffect } from "react";

export default function UpdateNotice({ id }) {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/faculty/getnotice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSubject(data.subject);
        setDetails(data.Details);
        setLoading(false);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedNotice = {
      id: id,
      subject: subject,
      Details: details,
    };
    fetch(`http://localhost:3000/faculty/updatenoticeBy/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNotice),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the updated data as needed
      });
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h2>Update Notice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
}

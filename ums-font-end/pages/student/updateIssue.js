// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// //import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// function update ()
// {
//     const { id } = useParams();
//     const [Data, setdata] = useState({});
//     //const naveigate = useNavigate();
//     useEffect(() => {
//       axios
//         .get("http://localhost:3000/student/getissue" + id)
//         .then((res) => setdata(res.data))
//         .catch((err) => console.log(err));
//     }, []);
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       axios
//         .put("http://localhost:3000/student/updateissue" + id, Data)
//         .then((res) => {
//           alert("issue Updated");
//           //naveigate("/allNotice");
//         });
//     }
//     return (
//       <>
//         <h2>Update issue</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor=" Isid"> Id</label>
//             <input type="text" name=" Isid" Value={Data.Isid} Isid=" Isid" />
//           </div>
//           <div>
//             <label htmlFor="issueType"> issue type</label>
//             <input
//               type="text"
//               name=" issueType"
//               Value={Data.subject}
//               id=" issueType"
//               onChange={(e) => setdata({ ...Data, subject: e.target.value })}
//             />
//           </div>
//           <div>
//             <label htmlFor="issue"> issue</label>
//             <input
//               type="text"
//               name=" issue"
//               Value={Data.Details}
//               id=" issue"
//               onChange={(e) => setdata({ ...Data, Details: e.target.value })}
//             />
//           </div>
//           <button type="submit">Upadate issue</button>
//         </form>
//       </>
//     );
// }
// export default update;

// import { useState } from "react";
// import { useRouter } from 'next/router'

// export default function updateIssue() {
//   const router = useRouter();
//   const [Isid, setId] = useState("");
//   const [issueType, setIssueType] = useState("");
//   const [issue, setIssue] = useState("");

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleUpdateIssue = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/issue/updateissue/`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ Isid, issueType, issue}),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setErrorMessage("");
//         setId("");
//         setIssueType("");
//         setIssue("");

//       } else {
//         setSuccessMessage("issuedata updated successfully.");
//         setErrorMessage(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setErrorMessage("Something went wrong.");
//     }
//   };

//   return (
//     <form onSubmit={handleUpdateIssue}>

//       <h1>Update Course Data</h1>

//       <label htmlFor="Isid">Issue ID:</label>
//       <input
//         type="number"
//         id="Isid"
//         value={Isid}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <br/>
//       <label htmlFor="issueType">Issue Type:</label>
//       <input
//         type="text"
//         id="issueType"
//         value={issueType}
//         onChange={(e) => setIssueType(e.target.value)}
//       />
//       <br/>
//       <label htmlFor="issue">issue:</label>
//       <input
//         type="text"
//         id="issue"
//         value={issue}
//         onChange={(e) => setIssue(e.target.value)}
//       />
//       <br/>
    
//       <button type="submit">Update</button>
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//       <br/>
//       <br/>
//       <br/>
//       <button type="button" onClick={() => router.back()}>GO BACK</button>
//     </form>
//     
//   );
// }

import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import SessionCheck from './sessioncheck';

const UpdateIssue = () => {
  const router = useRouter();
  const [Isid, setIsid] = useState(router.query.Isid || '');
  const [issueType, setIssueType] = useState(router.query.issueType || '');
  const [issue, setIssue] = useState(router.query.issue || '');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data here

    try {
      const response = await axios.put('http://localhost:3000/issue/updateissue', {
        Isid,
        issueType,
        issue,
      });
      setSuccess('update successful'); // set success message
      setError(null); // clear error message
      router.push('http://localhost:7000/student/getissue'); // redirect to getissue page
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // set error message
      }
    }
  };

  return (
    <SessionCheck>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="issueType">Issue Type:</label>
        <input
          type="text"
          name="issueType"
          id="issueType"
          value={issueType}
          onChange={(event) => setIssueType(event.target.value)}
        />

      </div>
      <div>
        <label htmlFor="issue">Issue:</label>
        <textarea
          name="issue"
          id="issue"
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
        />
       {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      </div>
      <button type="submit">Update</button>
    </form>
    </SessionCheck>
  );
};

export default UpdateIssue;
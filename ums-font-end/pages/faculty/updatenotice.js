import axios from "axios";
import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Updatenotice() {
  const { id } = useParams();
  const [Data, setdata] = useState({});
  //const naveigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/faculty/getnotice" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:3000/faculty/updatenotice" + id, Data)
      .then((res) => {
        alert("Notice Updated");
        //naveigate("/allNotice");
      });
  }
  return (
    <>
      <h2>Update Notice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" Value={Data.id} id=" id" />
        </div>
        <div>
          <label htmlFor=" subject"> Subject</label>
          <input
            type="text"
            name=" subject"
            Value={Data.subject}
            id=" subject"
            onChange={(e) => setdata({ ...Data, subject: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor=" details"> Details</label>
          <input
            type="text"
            name=" details"
            Value={Data.Details}
            id=" details"
            onChange={(e) => setdata({ ...Data, Details: e.target.value })}
          />
        </div>
        <button type="submit">Upadate Notice</button>
      </form>
    </>
  );
}

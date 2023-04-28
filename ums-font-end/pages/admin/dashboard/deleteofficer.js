import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function DeleteOfficer() {
  const [Oid, setofficerId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteOfficer/', { data: { Oid: Oid } });
      setStatus(`Notice with ID ${Oid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting officer: ${error.message}`);
    }
  };

  return (
    <div>
      <MyLayout title="Delete Officer"/>
      <h2>Delete Officer</h2>
      <label htmlFor="officer-id">Officer ID:</label>
      <input
        type="text"
        id="officer-id"
        value={Oid}
        onChange={(e) => setofficerId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK </button>
    </div>
  );
}

import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function DeleteFaculty() {
  const [facultyId, setfacultyId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteFaculty/', { data: { Fid: facultyId } });
      setStatus(`Faculty with ID ${Fid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting Faculty: ${error.message}`);
    }
  };

  return (
    <div>
      <MyLayout title="Delete Faculty"/>
      <h2>Delete Faculty</h2>
      <label htmlFor="faculty-id">Faculty ID:</label>
      <input
        type="text"
        id="faculty-id"
        value={facultyId}
        onChange={(e) => setfacultyId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK </button>
    </div>
  );
}

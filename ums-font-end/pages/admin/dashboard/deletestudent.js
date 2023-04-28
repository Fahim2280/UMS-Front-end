import { useState } from 'react';
import axios from 'axios';
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'


export default function DeleteStudent() {
  const [Sid, setStudentId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteStudent/', { data: { Sid: Sid } });
      setStatus(`Student with ID ${Sid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting student: ${error.message}`);
    }
  };

  return (
    <div>
      <MyLayout title="Delete student"/>
      <h2>Delete Student</h2>
      <label htmlFor="Sid">Student ID:</label>
      <input
        type="text"
        id="Sid"
        value={Sid}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK </button>
    </div>
  );
}

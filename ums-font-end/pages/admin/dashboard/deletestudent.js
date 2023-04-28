import { useState } from 'react';
import axios from 'axios';


export default function DeleteStudent() {
  const [Sid, setStudentId] = useState('');
  const [status, setStatus] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/admin/deleteStudent/${Sid}`);
      setStatus(`Student with ID ${Sid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting student: ${error.message}`);
    }
  };

  return (
    <div>
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
    </div>
  );
}

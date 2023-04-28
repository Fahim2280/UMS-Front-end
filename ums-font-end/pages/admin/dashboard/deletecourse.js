import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function DeleteCourse() {
  const [courseId, setcourseId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteCourse/', { data: { Cid: courseId } });
      setStatus(`Course has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting Course: ${error.message}`);
    }
  };

  return (
    <div>
      <MyLayout title="Delete Course"/>
      <h2>Delete Course</h2>
      <label htmlFor="course-id">Course ID:</label>
      <input
        type="text"
        id="course-id"
        value={courseId}
        onChange={(e) => setcourseId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK </button>
    </div>
  );
}

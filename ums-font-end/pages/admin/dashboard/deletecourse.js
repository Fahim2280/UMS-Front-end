import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function DeleteCourse() {
  const [Cid, setcourseId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteCourse/', { data: { Cid: Cid } });
      setStatus(`Course with ID ${Cid} has been deleted.`);
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
        value={Cid}
        onChange={(e) => setcourseId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <svg xmlns="http://www.w3.org/2000/svg"width="100%"height="100%"fill="none"viewBox="0 0 24 24"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="feather feather-chevron-left w-5 h-5"><polyline points="15 18 9 12 15 6"></polyline></svg><span class="sr-only">Icon description</span></button>

    </div>
  );
}

import { useState } from 'react';
import axios from 'axios';
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'


export default function DeleteNotice() {
  const [Nid, setNoticeId] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/admin/deleteNotice/', { data: { Nid: Nid } });
      setStatus(`Notice with ID ${Nid} has been deleted.`);
    } catch (error) {
      setStatus(`Error deleting notice: ${error.message}`);
    }
  };

  return (
    <div>
      <MyLayout title="Delete Notice"/>
      <h2>Delete Notice</h2>
      <label htmlFor="Nid">Notice ID:</label>
      <input
        type="text"
        id="Nid"
        value={Nid}
        onChange={(e) => setNoticeId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <div>{status}</div>
      <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK</button>
    </div>
  );
}

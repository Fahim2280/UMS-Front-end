import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import SessionCheck from './sessioncheck';
import MyLayout from './layout';

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
      setSuccess('update successful'); 
      setError(null); // clear error message
      router.push('http://localhost:7000/student/getissue'); 
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); 
      }
    }
  };

  return (
    <SessionCheck>
      <MyLayout/>
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
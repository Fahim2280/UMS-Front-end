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
      <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="issueType" className="text-lg font-bold mb-2">Issue Type:</label>
          <input
            type="text"
            name="issueType"
            id="issueType"
            value={issueType}
            onChange={(event) => setIssueType(event.target.value)}
            className="border border-gray-400 py-2 px-3 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="text-lg font-bold mb-2">Issue:</label>
          <textarea
            name="issue"
            id="issue"
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
            className="border border-gray-400 py-2 px-3 rounded-lg w-full"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400">Update</button>
      </form>
      </div>
        </section> 
    </SessionCheck>
  );

};

export default UpdateIssue;
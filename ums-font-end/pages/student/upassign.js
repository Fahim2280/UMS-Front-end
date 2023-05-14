import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SessionCheck from './sessioncheck';
import MyLayout from './layout';

const UploadAssignment = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null); // add success state
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentName(value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.name.match(/\.pdf$/)) {
      setFile(selectedFile);
      setErrors({});
    } else {
      setFile(null);
      setErrors({ file: 'Invalid file type, please choose a PDF file' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setErrors({ file: 'Please choose a file' });
      return;
    }
    const formData = new FormData();
    formData.append('myfile', file);
    formData.append('assignmentName', assignmentName);

    try {
      const response = await axios.post('http://localhost:3000/upassign/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSuccess('upload successful'); // set success message
      router.push('http://localhost:7000/student/homepage');
    } catch (error) {
      if (error.response) {
        // handle server error
      }
    }
  };

  return (
    <SessionCheck>
      <MyLayout/>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="assignmentName">Assignment Name:</label>
        <input
          type="text"
          name="assignmentName"
          id="assignmentName"
          value={assignmentName}
          onChange={handleInputChange}
        />
        {errors.assignmentName && <p className="error">{errors.assignmentName}</p>}
      </div>
      <div>
        <label htmlFor="file">Choose a PDF file:</label>
        <input type="file" name="file" id="file" accept=".pdf" onChange={handleFileChange} />
        {errors.file && <p className="error">{errors.file}</p>}
      </div>
      <button type="submit">Submit</button>
      {success && <p>{success}</p>} {/* display success message */}
    </form>
    </SessionCheck>
  );
};

export default UploadAssignment;

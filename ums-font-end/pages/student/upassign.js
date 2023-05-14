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
  <MyLayout />
  <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
  <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
    <div className="mb-4">
      <label htmlFor="assignmentName" className="block text-white font-bold mb-2">
        Assignment Name:
      </label>
      <input
        type="text"
        name="assignmentName"
        id="assignmentName"
        value={assignmentName}
        onChange={handleInputChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors.assignmentName && "border-red-500"
        }`}
      />
      {errors.assignmentName && <p className="text-red-500 text-xs italic">{errors.assignmentName}</p>}
    </div>
    <div className="mb-4">
      <label htmlFor="file" className="block text-white font-bold mb-2">
        Choose a PDF file:
      </label>
      <input
        type="file"
        name="file"
        id="file"
        accept=".pdf"
        onChange={handleFileChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors.file && "border-red-500"
        }`}
      />
      {errors.file && <p className="text-red-500 text-xs italic">{errors.file}</p>}
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
    {success && <p className="mt-4">{success}</p>}
  </form>
  </div>
        </section> 
</SessionCheck>

  );
};

export default UploadAssignment;

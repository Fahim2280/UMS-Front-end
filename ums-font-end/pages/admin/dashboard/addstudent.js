import { useState } from 'react';
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function AddStudent() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        Sidd: '',
        Sname: '',
        Sprogram: '',
        Sdep: '',
        Saddress: '',
        Snum: '',
        Sdob: ''
    
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/admin/insertstudent/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert('Student data submitted successfully!');
    setFormData({
        Sidd: '',
        Sname: '',
        Sprogram: '',
        Sdep: '',
        Saddress: '',
        Snum: '',
        Sdob: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
    <MyLayout title="Add Student"/>
    <h2>Add Course</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Student id:
        <input
          type="text"
          name="Sidd"
          value={formData.Sidd}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Student name:
        <input
          type="text"
          name="Sname"
          value={formData.Sname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Faculty:
        <input
          type="text"
          name="Sprogram"
          value={formData.Sprogram}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Depertment:
        <input
          type="text"
          name="Sdep"
          value={formData.Sdep}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        address:
        <input
          type="text"
          name="Saddress"
          value={formData.Saddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Phone Number:
        <input
          type="text"
          name="Snum"
          value={formData.Snum}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Date of Birth:
        <input
          type="text"
          name="Sdob"
          value={formData.Sdob}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK</button>
    </div>
  );
}

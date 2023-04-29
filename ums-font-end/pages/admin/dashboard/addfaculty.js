import { useState } from 'react';
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function AddFaculty() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        Fidd: '',
        Fname: '',
        Fprogram: '',
        Fdep: '',
        Faddress: '',
        Fnum: '',
        Fdob: ''
    
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/admin/insertfaculty/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    alert('Faculty data submitted successfully!');
    setFormData({
        Fidd: '',
        Fname: '',
        Fprogram: '',
        Fdep: '',
        Faddress: '',
        Fnum: '',
        Fdob: ''
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
    <MyLayout title="Add Faculty"/>
    <h2>Add Faculty</h2>
    <form onSubmit={handleSubmit}>
      <label>
      Faculty id:
        <input
          type="text"
          name="Fidd"
          value={formData.Fidd}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Faculty name:
        <input
          type="text"
          name="Fname"
          value={formData.Fname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Faculty:
        <input
          type="text"
          name="Fprogram"
          value={formData.Fprogram}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Depertment:
        <input
          type="text"
          name="Fdep"
          value={formData.Fdep}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        address:
        <input
          type="text"
          name="Faddress"
          value={formData.Faddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Phone Number:
        <input
          type="text"
          name="Fnum"
          value={formData.Fnum}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Date of Birth:
        <input
          type="text"
          name="Fdob"
          value={formData.Fdob}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br/>
      <br/>
      <button type="button" onClick={() => router.back()}>GO BACK</button>
    </div>
  );
}

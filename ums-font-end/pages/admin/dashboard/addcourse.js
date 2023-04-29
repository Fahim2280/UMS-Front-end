import { useState } from 'react';
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function AddCourse() {
    const router = useRouter();
    const [formData, setFormData] = useState({
    Cname: '',
    credit: '',
    room: '',
    time: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/admin/insertcourse/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      //throw new Error(response.statusText);
      console.log(response.statusText);
    }

    alert('Course data submitted successfully!');
    setFormData({
      Cname: '',
      credit: '',
      room: '',
      time: ''
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
    <MyLayout title="Add Course"/>
    <h2>Add Course</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input
          type="text"
          name="Cname"
          value={formData.Cname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Credit:
        <input
          type="text"
          name="credit"
          value={formData.credit}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        room:
        <input
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={formData.time}
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

import { useForm,Controller } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SessionCheck from './sessioncheck';
import Session from './session';
import MyLayout from './layout';

export default function addinfo() {
    const {
      control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const [dob, setDob] = useState(new Date());
    
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);

        const formData = new FormData();
        formData.append('Sname', data.Sname);
        formData.append('Sdep', data.Sdep);
        formData.append('Sidd', data.Sidd);
        formData.append('Saddress', data.Saddress);
        formData.append('Snum', data.Snum);
        formData.append('Sdob', data.Sdob);
        formData.append('Sprogram', data.Sprogram);
       
         console.log(formData);
         try {
            const response = await axios.post("http://localhost:3000/student/insertstudent",
                JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            setSuccess('info add successfull');
            reset();

         }
        catch (error) {
            console.log(error.response.data.message);

            setSuccess('info add unsuccessfull ' + error.response.data.message);
            console.log(error)

        }
    };

    return (
        <>
        <SessionCheck>
            <MyLayout/>
            <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
            <h1 className="text-xl font-bold mb-4">Add info</h1>
{success}
<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="max-w-md">
    <div className="mb-4">
        <label htmlFor="Sname" className="block font-bold">Name</label>
        <input
            type="text"
            id="Sname"
            {...register('Sname', { required: true })}
            className="border border-gray-400 p-2 w-full rounded-lg"
        />
        {errors.Sname && <p className="text-red-500 mt-2">Name is required</p>}
    </div>
    <div className="mb-4">
        <label htmlFor="Sdep" className="block font-bold">Department</label>
        <input
            type="text"
            id="Sdep"
            {...register('Sdep', { required: true })}
            className="border border-gray-400 p-2 w-full rounded-lg"
        />
        {errors.Sdep && <p className="text-red-500 mt-2">Department is required</p>}
    </div>
    <div className="mb-4">
        <label htmlFor="Sidd" className="block font-bold">Student ID</label>
        <input
            type="text"
            id="Sidd"
            {...register('Sidd', { required: true, pattern: /^[0-9]{2}-[0-9]{5}-[1-3]{1}$/ })}
            className="border border-gray-400 p-2 w-full rounded-lg"
        />
        {errors.Sidd && (
            <p className="text-red-500 mt-2">
                {errors.Sidd.type === 'required'
                    ? 'Student ID is required'
                    : 'Invalid Student ID'}
            </p>
        )}
    </div>
    <div className="my-4">
  <label htmlFor="Saddress" className="block font-bold mb-2">address</label>
  <textarea id="Saddress" className="border rounded py-2 px-3 w-full" {...register('Saddress', { required: true })} />
  {errors.Saddress && <p className="text-red-500 mt-2">address is required</p>}
</div>
<div className="my-4">
  <label htmlFor="Snum" className="block font-bold mb-2">phone</label>
  <input
    type="text"
    id="Snum"
    className="border rounded py-2 px-3 w-full"
    {...register('Snum', { required: true, pattern: /^(\+88)?01[0-9]{9}$/i })}
  />
  {errors.Snum && (
    <p className="text-red-500 mt-2">
      {errors.Snum.type === 'required'
        ? 'phone is required'
        : 'Invalid phone number'}
    </p>
  )}
</div>
<div className="my-4">
  <label htmlFor="Sprogram" className="block font-bold mb-2">program</label>
  <input
    type="text"
    id="Sprogram"
    className="border rounded py-2 px-3 w-full"
    {...register('Sprogram', { required: true })}
  />
  {errors.Sprogram && <p className="text-red-500 mt-2">program is required</p>}
</div>
<div className="my-4">
  <label htmlFor="Sdob" className="block font-bold mb-2">Date of Birth</label>
  <Controller
    control={control}
    name="Sdob"
    rules={{ required: true }}
    render={({ field }) => (
      <DatePicker
        id="Sdob"
        {...field}
        selected={field.value}
        dateFormat="yyyy-MM-dd"
        className="border rounded py-2 px-3 w-full"
      />
    )}
  />
  {errors.Sdob && <p className="text-red-500 mt-2">Date of Birth is required</p>}
</div>
<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
</form>
</div>
        </section> 
            </SessionCheck>
        </>
    );
}
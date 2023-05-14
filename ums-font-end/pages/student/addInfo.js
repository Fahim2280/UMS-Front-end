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
            <h1>Add info</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div>
                    <label htmlFor="Sname">Name</label>
                    <input
                        type="text"
                        id="Sname"
                        {...register('Sname', { required: true })}
                    />
                    {errors.Sname && <p>Name is required</p>}
                </div>
                <div>
                    <label htmlFor="Sdep">department</label>
                    <input
                        type="text"
                        id="Sdep"
                        {...register('Sdep', { required: true })}
                    />
                    {errors.Sdep && <p>department is required</p>}
                </div>
                <div>
                    <label htmlFor="Sidd">studentId</label>
                    <input
                        type="text"
                        id="Sidd"
                        {...register('Sidd', { required: true, pattern: /^[0-9]{2}-[0-9]{5}-[1-3]{1}$/ })}
                    />
                    {errors.Sidd && (
                        <p>
                            {errors.Sidd.type === 'required'
                                ? 'student id is required'
                                : 'Invalid studentId '}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="Saddress">address</label>
                    <textarea id="Saddress" {...register('Saddress', { required: true })} />
                    {errors.Saddress && <p>address is required</p>}
                </div>

                <div>
                    <label htmlFor="Snum">phone</label>
                    <input
                        type="text"
                        id="Snum"
                        {...register('Snum', { required: true, pattern: /^(\+88)?01[0-9]{9}$/i })}
                    />
                    {errors.Snum && (
                        <p>
                            {errors.Snum.type === 'required'
                                ? 'phone is required'
                                : 'Invalid phone number'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="Sprogram">program</label>
                    <input
                        type="text"
                        id="Sprogram"
                        {...register('Sprogram', { required: true })}
                    />
                    {errors.Sprogram && <p>program is required</p>}
                </div>
                {/* <div>
                    <label htmlFor="Sdob">dob</label>
                    <input
                        type="text"
                        id="Sdob"
                        {...register('Sdob', { required: true })}
                    />
                    {errors.Sdob && <p>dob is required</p>}
                </div> */}
                <div>
          <label htmlFor="Sdob">Date of Birth</label>
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
              />
            )}
          />
          {errors.dob && <p>Date of Birth is required</p>}
        </div>
                <button type="submit">Submit</button>
            </form>
            <Session/>
            </SessionCheck>
        </>
    );
}
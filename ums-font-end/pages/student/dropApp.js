import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import SessionCheck from './sessioncheck';


export default function dropapp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('applicationStatus', data.applicationStatus);
        formData.append('reason', data.reason);

        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/drop/insertdrop",
                JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            setSuccess('drop application successfull');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);

            setSuccess('not successfull ' + error.response.data.message);

        }


    };
    return (
        <>
          <SessionCheck>
            <h1>add drop application</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              
                <div>
                  application Status will be pending
                </div>
                <div>
                    <label htmlFor="reason">reason</label>
                    <input
                        type="reason"
                        id="reason"
                        {...register('reason', { required: true })}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>
            </SessionCheck>
        </>
    );
}
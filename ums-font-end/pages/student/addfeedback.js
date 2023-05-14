import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import SessionCheck from './sessioncheck';
import MyLayout from './layout';


export default function addfeedback() {
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
        formData.append('feedback', data.feedback);

        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/facfeedback/insertfeedback",
                JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            setSuccess('feedback successfull');
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
            <MyLayout/>
          
            <h1>add feedback</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              
           
                <div>
                    <label htmlFor="feedback">feedback</label>
                    <input
                        type="feedback"
                        id="feedback"
                        {...register('feedback')}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>
            </SessionCheck>
        </>
    );
}
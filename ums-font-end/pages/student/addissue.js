import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import SessionCheck from './sessioncheck';
import MyLayout from './layout';


export default function addissue() {
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
        formData.append('issueType', data.issueType);
        formData.append('issue', data.issue);
        formData.append('studentId', data.studentId);

        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/issue/insertissue",
                JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const mailResponse = await axios.post("http://localhost:3000/issue/sendemail", {
                subject: "New issue added", 
                text: "A new issue has been added."
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setSuccess('issue added');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);

            setSuccess('issue not added ' + error.response.data.message);

        }


    };
    return (
        <>
          <SessionCheck>
            <MyLayout/>
            <h1>add issue</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              
                <div>
                    <label htmlFor="issueType">issue type</label>
                    <input
                        type="issueType"
                        id="issueType"
                        {...register('issueType')}
                    />
                    
                </div>
                <div>
                    <label htmlFor="issue">issue</label>
                    <input
                        type="issue"
                        id="issue"
                        {...register('issue')}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>
            </SessionCheck>
        </>
    );
}
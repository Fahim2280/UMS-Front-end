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
            <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
            <h1 className="text-3xl font-bold mb-4">Add Issue</h1>
            {success && <p className="text-green-600 mb-4">{success}</p>}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              
                <div className="mb-4">
                    <label htmlFor="issueType" className="block font-medium text-white mb-2">Issue Type</label>
                    <input
                        type="issueType"
                        id="issueType"
                        {...register('issueType')}
                        className="px-3 py-2 border rounded w-full"
                    />
                    
                </div>
                <div className="mb-4">
                    <label htmlFor="issue" className="block font-medium text-white mb-2">Issue</label>
                    <input
                        type="issue"
                        id="issue"
                        {...register('issue')}
                        className="px-3 py-2 border rounded w-full"
                    />
                </div>
               
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </form>
            </div>
        </section> 
            </SessionCheck>
        </>
    );
}

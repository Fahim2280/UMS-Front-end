import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import SessionCheck from './sessioncheck';
import MyLayout from './layout';

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

            setSuccess('Drop application successful');
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess('Not successful ' + error.response.data.message);
        }
    };

    return (
        <>
            <SessionCheck>
                <MyLayout/>
                <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
                <h1 className="text-2xl font-bold mb-4">Add Drop Application</h1>
                {success && <p className="text-green-600 font-bold">{success}</p>}
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="mb-4">
                        <p>Application status will be pending</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reason" className="block font-bold mb-2">Reason:</label>
                        <input
                            type="reason"
                            id="reason"
                            {...register('reason', { required: true })}
                            className="w-full p-2 border border-gray-400 rounded-md"
                        />
                        {errors.reason && <p className="text-red-500">This field is required</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Submit</button>
                </form>
                </div>
        </section> 
            </SessionCheck>
        </>
    );
}

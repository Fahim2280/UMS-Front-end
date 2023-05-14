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
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
      <h1 className="text-2xl font-bold mb-4">Add Feedback</h1>

      {success && <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md mb-4">{success}</div>}

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="feedback" className="mb-2 font-medium">Feedback</label>
          <input type="feedback" id="feedback" {...register('feedback')} className="border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
      </div>
        </section>
    </SessionCheck>
  </>
);

}
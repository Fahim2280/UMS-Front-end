import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"


export default function signup() {
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
        formData.append('email', data.email);
        formData.append('password', data.password);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/logincon/signup",
                JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            setSuccess('signup successfull');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);

            setSuccess('signup unsuccessfull ' + error.response.data.message);

        }


    };
    return (
        <>
          
            <h1>signup</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /^[0-9]{2}-[0-9]{5}-[1-3]{1}@student.aiub.edu$/ })}
                    />
                    {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                    />
                    {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                ? 'password is required'
                                : 'Invalid password address'}
                        </p>
                    )}
                </div>
               
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState,useEffect } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();

    useEffect(() => {
        const session = sessionStorage.getItem('email');
        if (session) {
          router.push('/student/homepage');
        }
      }, []);
    
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
        <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    
        <h1 class="text-2xl font-bold mb-4">Signup for a student account</h1>
        {success && <p class="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="flex flex-col gap-4">
        
            <div class="flex flex-col gap-2">
                <label htmlFor="email" class="font-bold mb-2">Email</label>
                <input type="email" id="email" {...register('email', { required: true, pattern: /^[0-9]{2}-[0-9]{5}-[1-3]{1}@student.aiub.edu$/ })}
                    class="p-2 border rounded"
                />
                {errors.email && (
                    <p class="text-red-500 mt-2">
                        {errors.email.type === 'required'
                            ? 'Email is required'
                            : 'Invalid email address'}
                    </p>
                )}
            </div>
            
            <div class="flex flex-col gap-2">
                <label htmlFor="password" class="font-bold mb-2">Password</label>
                <input type="password" id="password" {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                    class="p-2 border rounded"
                />
                {errors.password && (
                    <p class="text-red-500 mt-2">
                        {errors.password.type === 'required'
                            ? 'Password is required'
                            : 'Password should be between 8 and 20 characters'}
                    </p>
                )}
            </div>
            
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Sign up</button>
            
            <div class="flex justify-center items-center mt-4">
                <span class="text-gray-600 text-sm">Already have an account? </span>
                <Link href="login"><button className="bg-blue-500 text-white px-4 py-2 rounded">Log in</button></Link>

            </div>
            
        </form>
    
    </div>
</section>
        </>
      );
      
}
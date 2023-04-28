import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '../../component/sessioncheck'

export default function AddStudent() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

//session
// const validateFile = (value) => {
//     const file = value[0];
//     const allowedtypes = ["image/jpg", "image/png"];

//     if (!allowedtypes.includes(file.type)){
//         return false;
//     }
//     }
    //----------------


    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('Sidd', data.Sidd);
        formData.append('Sname', data.Sname);
        formData.append('Sprogram', data.Sprogram);
        formData.append('Sdep', data.Sdep);
        formData.append('Saddress', data.Saddress);
        formData.append('Snum', data.Snum);
        formData.append('Sdob', data.Sdob);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/admin/insertstudent",
                formData, {
                headers: {
                    'accept': 'application/json',
                }
            });
            setSuccess('Admin add successfully');
            reset();
        }
        catch (error) {
            //console.log(error.response.data.message);
            setSuccess('atudent add successfully -err  ' );
        }
    };

    return (
        <>
   
            <MyLayout title="Add Admin" />
            <h1>Add student</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div>
                    <label htmlFor="Sidd">ID</label>
                    <input
                        type="number"
                        id="Sidd"
                        {...register('Sidd', { required: true })}
                    />
                    {errors.Sidd && <p>Sidd is required</p>}
                </div>

                <div>
                    <label htmlFor="Sname">Name</label>
                    <input
                        type="text"
                        id="Sname"
                        {...register('Sname', { required: true })}
                    />
                    {errors.Sname && <p>Sname is required</p>}
                </div>

                <div>
                    <label htmlFor="Sprogram">Sprogram</label>
                    <input
                        type="text"
                        id="Sprogram"
                        {...register('Sprogram', { required: true })}
                    />
                    {errors.Sprogram && <p>Sprogram is required</p>}
                </div>

                <div>
                    <label htmlFor="Sdep">Sdep</label>
                    <input
                        type="text"
                        id="Sdep"
                        {...register('Sdep', { required: true })}
                    />
                    {errors.Sdep && <p>Sdep is required</p>}
                </div>

                <div>
                    <label htmlFor="Saddress">Saddress</label>
                    <input
                        type="text"
                        id="Saddress"
                        {...register('Saddress', { required: true })}
                    />
                    {errors.Saddress && <p>Saddress is required</p>}
                </div>

                <div>
                    <label htmlFor="Snum">Snum</label>
                    <input
                        type="text"
                        id="Snum"
                        {...register('Snum', { required: true })}
                    />
                    {errors.Snum && <p>Snum is required</p>}
                </div>

                <div>
                    <label htmlFor="Sdob">Sdob</label>
                    <input
                        type="text"
                        id="Sdob"
                        {...register('Sdob', { required: true })}
                    />
                    {errors.Sdob && <p>Sdob is required</p>}
                </div>
               




                <button type="submit">Submit</button>
            </form>

            <button type="button" onClick={() => router.back()}> Click here to go back</button>
        </>
    );
}
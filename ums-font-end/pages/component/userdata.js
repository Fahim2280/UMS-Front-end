
import Image from 'next/image'

export default function UserLayout({data})   
{
    return(
        <>
      
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Address: {data.address}</h2>
      <h2>Picture: </h2>
      <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}
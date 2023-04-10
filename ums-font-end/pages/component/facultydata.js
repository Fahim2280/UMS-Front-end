
import Image from 'next/image'

export default function FacultyLayout({data})   
{
    return(
        <>
      
      <h2>Faculty ID: {data.Fidd}</h2>
      <h2>Faculty Name: {data.Fname}</h2>
      <h2>Program: {data.Fprogram}</h2>
      <h2>Depertment: {data.Fdep}</h2>
      <h2>Number: {data.Fnum}</h2>
      <h2>DOB: {data.Fdob}</h2>
      <h2>Address: {data.Faddress}</h2>
        </>
    )
}
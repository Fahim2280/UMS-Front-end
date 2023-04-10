
import Image from 'next/image'

export default function StudentLayout({data})   
{
    return(
        <>
      <h2>Student ID: {data.Sidd}</h2>
      <h2>Student Name: {data.Sname}</h2>
      <h2>Program: {data.Sprogram}</h2>
      <h2>Depertment: {data.Sdep}</h2>
      <h2>Number: {data.Snum}</h2>
      <h2>DOB: {data.Sdob}</h2>
      <h2>Address: {data.Saddress}</h2>
        </>
    )
}

import Image from 'next/image'

export default function OfficerLayout({data})   
{
    return(
        <>
      <h2>Officer ID: {data.Oid}</h2>
      <h2>Officer Name: {data.Oname}</h2>
      <h2>Depertment: {data.Odep}</h2>
      <h2>Number: {data.Onum}</h2>
      <h2>DOB: {data.Odob}</h2>
      <h2>Address: {data.Oaddress}</h2>
        </>
    )
}
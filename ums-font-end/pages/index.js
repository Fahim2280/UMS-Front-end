import MyLayout from "./component/layout"
import Link from "next/link"

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <>
    <MyLayout title="Home"/>
    <h1>Home Page</h1>
    <h3>University managment System</h3>
    <Link href="/admin/dashboard/">DashBoard</Link>
    </>
  )
}

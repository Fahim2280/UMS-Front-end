import MyLayout from "@/pages/component/layout"
import Link from "next/link"

export default function AdminDashboard() {

    return (
      <>
      <MyLayout title="Admin DashBoard"/>
      <h1>Admin Dashboard</h1>

    <br></br>
    <Link href="/admin/dashboard/findadmin">Find Admin by ID</Link>
    <br></br>
    <Link href="/admin/dashboard/findstudent">Search Student by Name</Link>
    <br></br>
    <Link href="/admin/dashboard/findfaculty">Search Faculty</Link>
    <br></br>
    <Link href="/admin/dashboard/findofficer">Search Official</Link>
    <br></br>
    <Link href="/admin/dashboard/findadmin">All Notice</Link>
    <br></br>
    <Link href="/admin/dashboard/findadmin">All Student Grade</Link>
    <br></br>
    <Link href="/admin/dashboard/findadmin">All Course</Link>
    <br></br>
    <Link href="/admin/dashboard/getusers">See All Users</Link>
      </>
    )
  }


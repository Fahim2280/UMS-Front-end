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
    <br></br>
    <Link href="/admin/dashboard/findstudent">Search Student by Name</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/findfaculty">Search Faculty by Depertment</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/findofficer">Search Official</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/getnotice">All Notice</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/getstudents">All Student </Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/getcourse">All Course</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/addadmin">Register</Link>
    <br></br>
    <br></br>
    <Link href="/signin">Signin</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/addstudent">Add Student</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/deletestudent">Delete Student</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/deletefaculty">Delete Faculty</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/deleteofficer">Delete Officer</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/deletecourse">Delete Course</Link>
    <br></br>
    <br></br>
    <Link href="/admin/dashboard/deletenotice">Delete Notice</Link>
    <br></br>
    <br></br>
      </>
    )
  }


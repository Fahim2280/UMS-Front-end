import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <nav>
        <Link href="about"> <button>AboutUs </button></Link>
        <Link href="addInfo"> <button>Add Info</button> </Link>
        <Link href="showInfo"> <button>Show Info</button> </Link>
        {/* <Link href="updateInfo"> <button>Update Info</button> </Link> */}
        <Link href="feedback"> <button>feedback</button> </Link>
        <Link href="showCurriculum"> <button>Show Curriculum</button> </Link>
        <Link href="showResults"> <button>Show Result</button> </Link>
        <Link href="paymentDetails"> <button>Payment Details</button> </Link>
        <Link href="showSections"> <button>Show Section</button> </Link>
        <Link href="showCourse"> <button>Show Courses</button> </Link>
        <Link href="dropApp"> <button>Drop Application</button></Link>
        <Link href="showNotice"> <button>Show Notice</button> </Link>
        <Link href="/login"> <button>logout</button> </Link>


        </nav>
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            </div>
        
        </>
       
    )
}
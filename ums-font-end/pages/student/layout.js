import Link from "next/link"

export default function MyLayout(props)   
{
    return(
        <>
        <nav>
        <Link href="about"> <button>AboutUs </button></Link>
        <Link href="addInfo"> <button>Add Info</button> </Link>
        <Link href="showInfo"> <button>Show Info</button> </Link>
        {/* <Link href="updateInfo"> <button>Update Info</button> </Link> */}
        <Link href="getfeedback"> <button>feedback</button> </Link>
        <Link href="showCurriculum"> <button>Show Curriculum</button> </Link>
        <Link href="showResults"> <button>Show Result</button> </Link>
        <Link href="paymentDetails"> <button>Payment Details</button> </Link>
        <Link href="dropApp"> <button>Drop Application</button></Link>
        <Link href="showNotice"> <button>Show Notice</button> </Link>
        <Link href="addfeedback"> <button>Add Feedback</button> </Link>
        <Link href="addissue"> <button>Add Issue</button> </Link>
        <Link href="getdrop"> <button>Get Drop</button> </Link>
        <Link href="getgrade"> <button>Get Grade</button> </Link>
        <Link href="getissue"> <button>Get Issue</button> </Link>
        <Link href="getstudent"> <button>Get Student</button> </Link>
        <Link href="homepage"> <button>Home Page</button> </Link>
        <Link href="studentissues"> <button>Student Issue</button> </Link>
        <Link href="upassign"> <button>Upload assignment</button> </Link>
        


        </nav>
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            </div>
        
        </>
       
    )
}
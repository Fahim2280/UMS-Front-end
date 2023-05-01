import { useState } from "react";
import Link from "next/link";
import Login from "../login";
import Register from "../register";
import AddNotice from "./addnotice";
import UpdateNotice from "./[updatenotice]";
import AllNotice from "./allNotice";
import DeleteNotice from "./deletenotice";
import RequestRoom from "./Requstroom";
import UpdateRequestRoom from "./updateRequstroom";
import DeleteRequestRoom from "./deleteRequstroom";
import AllRequestRoom from "./allRequstroom";
import AddStudentGrade from "./addStudentGrade";
import UpdateStudentGrade from "./updateStudentGrade";
import DeleteStudentGrade from "./deleteStudentGrade";
import AllStudentGrade from "./allStudentGrade";
import AllFacultyInfo from "./allfacultyInfo";

function Sidebar({ onButtonClick }) {
  return (
    <div className="sidebar">
      <button onClick={() => onButtonClick(1)}>Add Notice</button>
      <button onClick={() => onButtonClick(2)}>Show all Faculty Info</button>
      <button onClick={() => onButtonClick(3)}>Upadate Notice</button>
      <button onClick={() => onButtonClick(4)}>Delete Notice</button>
      <button onClick={() => onButtonClick(5)}>Show all Notice</button>
      <button onClick={() => onButtonClick(6)}>Request Room</button>
      <button onClick={() => onButtonClick(7)}>Upadate Request Room</button>
      <button onClick={() => onButtonClick(8)}>Delete Request Room</button>
      <button onClick={() => onButtonClick(9)}>Show all Request Room</button>
      <button onClick={() => onButtonClick(10)}>Add Student Grade</button>
      <button onClick={() => onButtonClick(11)}>Update Student Grade</button>
      <button onClick={() => onButtonClick(12)}>Delete Student Grade</button>
      <button onClick={() => onButtonClick(13)}>Show all Student Grade</button>
      <button onClick={() => onButtonClick(14)}>Sing In</button>
      <button onClick={() => onButtonClick(15)}>Sing Up</button>
    </div>
  );
}

function DataDisplay({ selectedButton }) {
  if (selectedButton === null) {
    return <div className="data-display">Select a button</div>;
  }
  if (selectedButton === 1) {
    return <AddNotice />;
  }
  if (selectedButton === 2) {
    return <AllFacultyInfo />;
  }
  if (selectedButton === 3) {
    return <UpdateNotice />;
  }
  if (selectedButton === 4) {
    return <DeleteNotice />;
  }
  if (selectedButton === 5) {
    return <AllNotice />;
  }
  if (selectedButton === 6) {
    return <RequestRoom />;
  }
  if (selectedButton === 7) {
    return <UpdateRequestRoom />;
  }
  if (selectedButton === 8) {
    return <DeleteRequestRoom />;
  }
  if (selectedButton === 9) {
    return <AllRequestRoom />;
  }
  if (selectedButton === 10) {
    return <AddStudentGrade />;
  }
  if (selectedButton === 11) {
    return <UpdateStudentGrade />;
  }
  if (selectedButton === 12) {
    return <DeleteStudentGrade />;
  }
  if (selectedButton === 13) {
    return <AllStudentGrade />;
  }
  if (selectedButton === 14) {
    return <Login />;
  }
  if (selectedButton === 15) {
    return <Register />;
  }
  return (
    <div className="data-display">
      <h1>Data for Button {selectedButton}</h1>
      <p>This is the data for button {selectedButton}</p>
    </div>
  );
}

export default function Index() {
  const [selectedButton, setSelectedButton] = useState(null);

  const onButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <>
      <Sidebar onButtonClick={onButtonClick} />
      <DataDisplay selectedButton={selectedButton} />
    </>
  );
}

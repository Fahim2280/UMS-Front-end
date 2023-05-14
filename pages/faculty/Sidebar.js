import { useState } from "react";
import Link from "next/link";

import Login from "./login";

import Register from "../register";
import AddNotice from "./addnotice";
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
import Session from "./session";

function Sidebar({ onButtonClick }) {
  return (
    <div className="sidebar">
      <button
        onClick={() => onButtonClick(2)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Show all Faculty Info
      </button>
      <button
        onClick={() => onButtonClick(1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Add Notice
      </button>

      <button
        onClick={() => onButtonClick(5)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Show all Notice
      </button>
      <button
        onClick={() => onButtonClick(6)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Request Room
      </button>
      <button
        onClick={() => onButtonClick(9)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Show all Request Room
      </button>
      <button
        onClick={() => onButtonClick(10)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Add Student Grade
      </button>
      <button
        onClick={() => onButtonClick(13)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Show all Student Grade
      </button>
      <button
        onClick={() => onButtonClick(15)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Sign Up
      </button>
      <button
        onClick={() => onButtonClick(16)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Sign Out
      </button>
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
  if (selectedButton === 15) {
    return <Register />;
  }
  if (selectedButton === 16) {
    return <Session />;
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

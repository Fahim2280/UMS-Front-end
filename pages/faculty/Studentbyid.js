import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AllStudentG from "./userData";

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: "Studentbyid",
      query: { inputValue: inputValue },
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Search Faculty by ID</h3>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {data.status == null ? <AllStudentG data={data} /> : data.status}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
    const response = await axios.get(
      "http://localhost:3000/faculty/get/" + inputValue
    );
    const data = await response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: { status: "Enter valid Faculty ID" },
      },
    };
  }
}

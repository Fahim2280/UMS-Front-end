import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/component/layout';
import UserLayout from '@/pages/component/userdata';

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findadmin',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
     <MyLayout />
      <form onSubmit={handleFormSubmit}>
      <h3>Search Admin by ID</h3>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {data.status == null? 
   <UserLayout data={data}/>
      : data.status }
    </>
  );
}

export async function getServerSideProps({ query }) {
  inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findadmin/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"Enter valid Admin ID"}
    }
  };
}
}

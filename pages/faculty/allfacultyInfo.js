import { useState, useEffect } from "react";

export default function AllFacultyInfo() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getall")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:3000/faculty/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Remove the deleted faculty from the data array
          const updatedData = data.filter((faculty) => faculty.Fid !== id);
          setData(updatedData);
        } else {
          console.log("Delete failed");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Delete error:", error);
        setLoading(false);
      });
  };

  const handleUpdate = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`http://localhost:3000/faculty/update/${selectedFaculty.Fid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedFaculty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Replace the updated faculty in the data array
          const updatedData = data.map((faculty) =>
            faculty.id === selectedFaculty.id ? selectedFaculty : faculty
          );
          setData(updatedData);
          setSelectedFaculty(null);
        } else {
          console.log("Update failed");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Update error:", error);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data not found!!!</p>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Show All Faculty Info</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Id</th>
            <th className="py-2">FIDD</th>
            <th className="py-2">Name</th>
            <th className="py-2">Department</th>
            <th className="py-2">Program</th>
            <th className="py-2">Address</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Date of Birth</th>
            <th className="py-2">Salary</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((faculty) => (
            <tr key={faculty.Fid}>
              <td className="py-2">{faculty.Fid}</td>
              <td className="py-2">{faculty.Fidd}</td>
              <td className="py-2">{faculty.Fname}</td>
              <td className="py-2">{faculty.Fdep}</td>
              <td className="py-2">{faculty.Fprogram}</td>
              <td className="py-2">{faculty.Faddress}</td>
              <td className="py-2">{faculty.Fnum}</td>
              <td className="py-2">{faculty.dob}</td>
              <td className="py-2">{faculty.Fsal}</td>
              <td className="py-2">
                <button
                  onClick={() => handleUpdate(faculty)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(faculty.Fid)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Form */}
      {selectedFaculty && (
        <form onSubmit={handleFormSubmit} className="mt-4">
          <h3 className="text-xl font-bold mb-2">Update Faculty</h3>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={selectedFaculty.Fname}
              onChange={(e) =>
                setSelectedFaculty({
                  ...selectedFaculty,
                  Fname: e.target.value,
                })
              }
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </label>
          {/* Include other fields for updating faculty information */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      )}
    </>
  );
}


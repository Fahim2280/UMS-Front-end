import { useState, useEffect } from "react";
import Link from "next/link";

export default function AllNotice() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [editedNotice, setEditedNotice] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getnotice")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function handleDelete(id) {
    const conf = window.confirm("Are you sure you want to delete?");
    if (conf === true) {
      fetch(`http://localhost:3000/faculty/deletenotice/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Delete Response:", data);
          setData(data);
        })
        .catch((error) => {
          console.error("Error deleting notice:", error);
        });
    }
  }

  function handleEdit(notice) {
    setEditedNotice(notice);
  }

  function handleSave(id) {
    const conf = window.confirm("Are you sure you want to update?");
    if (conf === true) {
      fetch(`http://localhost:3000/faculty/updatenoticeBy/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedNotice),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Update Response:", data);
          setData(data);
          setEditedNotice(null);
        })
        .catch((error) => {
          console.error("Error updating notice:", error);
        });
    }
  }

  function handleCancel() {
    setEditedNotice(null);
  }

  if (isLoading) return <p>Loading...</p>;
  if (!Array.isArray(data)) return <p>Data not Found!!!</p>; // Check if data is an array
  return (
    <>
      <h2 class="text-2xl font-bold mb-4">All Notice</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="border border-gray-400 px-4 py-2">Id</th>
            <th class="border border-gray-400 px-4 py-2">Subject</th>
            <th class="border border-gray-400 px-4 py-2">Details</th>
            <th class="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((notice) => (
            <tr key={notice.id}>
              <td class="border border-gray-400 px-4 py-2">{notice.id}</td>
              <td class="border border-gray-400 px-4 py-2">
                {editedNotice?.id === notice.id ? (
                  <input
                    type="text"
                    value={editedNotice.subject}
                    onChange={(e) =>
                      setEditedNotice({
                        ...editedNotice,
                        subject: e.target.value,
                      })
                    }
                    class="border border-gray-400 p-2 w-full rounded"
                  />
                ) : (
                  notice.subject
                )}
              </td>
              <td class="border border-gray-400 px-4 py-2">
                {editedNotice?.id === notice.id ? (
                  <textarea
                    value={editedNotice.Details}
                    onChange={(e) =>
                      setEditedNotice({
                        ...editedNotice,
                        Details: e.target.value,
                      })
                    }
                    class="border border-gray-400 p-2 w-full rounded"
                  />
                ) : (
                  notice.Details
                )}
              </td>
              <td class="border border-gray-400 px-4 py-2">
                {editedNotice?.id === notice.id ? (
                  <>
                    <button
                      onClick={() => handleSave(notice.id)}
                      class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleCancel()}
                      class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(notice)}
                      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(notice.id)}
                      class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

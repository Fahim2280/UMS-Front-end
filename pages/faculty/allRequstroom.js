import { useState, useEffect } from "react";

export default function AllRequestRoom() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    Fid: "",
    room: "",
    reason: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:3000/faculty/getrequestroom")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  const handleUpdate = (id) => {
    const requestToUpdate = data.find((request) => request.id === id);
    if (requestToUpdate) {
      setUpdateData({
        id: requestToUpdate.id,
        Fid: requestToUpdate.Fid,
        room: requestToUpdate.room,
        reason: requestToUpdate.reason,
        date: requestToUpdate.date,
        time: requestToUpdate.time,
      });
    }
  };

  const handleUpdateSubmit = () => {
    fetch(`http://localhost:3000/faculty/updaterequestroom/${updateData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then(() => {
        fetchData();
        setUpdateData({
          id: "",
          Fid: "",
          room: "",
          reason: "",
          date: "",
          time: "",
        });
      })
      .catch((error) => {
        console.error("Error updating request:", error);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/faculty/deleterequestroom/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting request:", error);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No requests found.</p>;
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Show All Request Room</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Id</th>
            <th className="py-2">Fid</th>
            <th className="py-2">Room</th>
            <th className="py-2">Reason</th>
            <th className="py-2">Date</th>
            <th className="py-2">Time</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((request) => (
            <tr key={request.id}>
              <td className="py-2">{request.id}</td>
              <td className="py-2">{request.Fid}</td>
              <td className="py-2">{request.room}</td>
              <td className="py-2">{request.reason}</td>
              <td className="py-2">{request.date}</td>
              <td className="py-2">{request.time}</td>

              <td className="py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleUpdate(request.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(request.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateData.id && (
        <div className="my-4">
          <h3 className="text-xl font-bold">Update Request</h3>
          <form onSubmit={handleUpdateSubmit}>
            <label className="block my-2">
              Fid:
              <input
                className="border border-gray-400 px-2 py-1"
                type="text"
                value={updateData.Fid}
                onChange={(e) =>
                  setUpdateData({ ...updateData, Fid: e.target.value })
                }
              />
            </label>
            <label className="block my-2">
              Room:
              <input
                className="border border-gray-400 px-2 py-1"
                type="text"
                value={updateData.room}
                onChange={(e) =>
                  setUpdateData({ ...updateData, room: e.target.value })
                }
              />
            </label>
            <label className="block my-2">
              Reason:
              <input
                className="border border-gray-400 px-2 py-1"
                type="text"
                value={updateData.reason}
                onChange={(e) =>
                  setUpdateData({ ...updateData, reason: e.target.value })
                }
              />
            </label>
            <label className="block my-2">
              Date:
              <input
                className="border border-gray-400 px-2 py-1"
                type="text"
                value={updateData.date}
                onChange={(e) =>
                  setUpdateData({ ...updateData, date: e.target.value })
                }
              />
            </label>
            <label className="block my-2">
              Time:
              <input
                className="border border-gray-400 px-2 py-1"
                type="text"
                value={updateData.time}
                onChange={(e) =>
                  setUpdateData({ ...updateData, time: e.target.value })
                }
              />
            </label>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

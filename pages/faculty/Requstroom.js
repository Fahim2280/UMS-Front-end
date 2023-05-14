import { useState } from "react";
import { useRouter } from "next/router";

export default function RequestRoom () {
  const [formData, setFormData] = useState({
    Fid: "",
    room: "",
    reason: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are empty
    const isEmpty = Object.values(formData).every(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      setError("Please fill in all the fields.");
      return;
    }

    // Send the form data to the backend
    try {
      const response = await fetch("/faculty/insertrequestroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        // Reset the form data and error message
        setFormData({
          Fid: "",
          room: "",
          reason: "",
          date: "",
          time: "",
        });
        setError("");
        // Redirect to a success page or any other page
        router.push("/success");
      } else {
        // Handle error response
        setError("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-4 bg-gray-100"
    >
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="Fid">
          Fid:
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="Fid"
          id="Fid"
          value={formData.Fid}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="room">
          Room:
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="room"
          id="room"
          value={formData.room}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="reason">
          Reason:
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="reason"
          id="reason"
          value={formData.reason}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="date">
          Date:
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="time">
          Time:
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="time"
          id="time"
          value={formData.time}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

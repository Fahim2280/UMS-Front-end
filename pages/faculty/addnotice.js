import { useState } from "react";

export default function AddNotice() {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!subject || !details) {
      setError("Please fill in all fields.");
      return;
    }

    const newNotice = {
      subject: subject,
      Details: details,
    };
    setLoading(true);
    setMessage("");
    setError("");
    fetch("http://localhost:3000/faculty/insertnotice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data) {
          setMessage("Notice added successfully!");
          setSubject("");
          setDetails("");
        } else {
          setError("Failed to add notice. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
      });
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Notice</h2>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block font-bold mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block font-bold mb-2">
              Details:
            </label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="border border-gray-300 rounded py-2 px-4 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Notice
          </button>
        </form>
      </div>
    </>
  );
}

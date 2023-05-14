import MyLayout from "./layout";

export default function showResults() {
  return (
    <>
      <MyLayout />
      <section class="min-h-screen dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
       
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Results</h1>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-4 text-black">Subject</th>
              <th className="border p-4 text-black">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4">Mathematics</td>
              <td className="border p-4">80</td>
            </tr>
            <tr>
              <td className="border p-4 text-black">Science</td>
              <td className="border p-4 text-black">85</td>
            </tr>
            <tr>
              <td className="border p-4">English</td>
              <td className="border p-4">90</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        th,
        td {
          font-size: 16px;
        }

        th {
          text-align: left;
          background-color: #edf2f7;
        }

        tr:nth-child(even) {
          background-color: #f7fafc;
        }

        tr:hover {
          background-color: #e2e8f0;
        }
      `}</style>
         </div>
        </section> 
    </>
  );
}

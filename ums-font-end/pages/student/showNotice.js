import MyLayout from "./layout";

export default function showNotice() {
  return (
    <>
      <MyLayout />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-4">Notice Board</h1>
          <ul className="list-disc pl-8">
            <li className="mb-4">
              <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
                Notice 1
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
                Notice 2
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
                Notice 3
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
                Notice 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

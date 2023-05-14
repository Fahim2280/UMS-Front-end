import MyLayout from "./layout";

export default function showCurriculum() {
  return (
    <>
      <MyLayout />
      <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
       
      <h1 className="text-4xl font-bold mb-8">Curriculum</h1>

      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-black">Semester 1</h2>
          <ul className="list-disc pl-8 text-black">
            <li>Introduction to Computer Science</li>
            <li>Calculus I</li>
            <li>English Composition I</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-black">Semester 2</h2>
          <ul className="list-disc pl-8 text-black">
            <li>Data Structures and Algorithms</li>
            <li>Calculus II</li>
            <li>English Composition II</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-black">Semester 3</h2>
          <ul className="list-disc pl-8 text-black">
            <li>Operating Systems</li>
            <li>Discrete Mathematics</li>
            <li>Introduction to Statistics</li>
          </ul>
        </div>
      </div>
      </div>
       
        </section> 
    </>
  );
}

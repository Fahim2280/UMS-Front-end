import MyLayout from "./layout";
import Session from "./session";
import SessionCheck from "./sessioncheck";

export default function homepage() {
  return (
    <>
      <SessionCheck>
        <MyLayout/>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="p-4">
            <h1 className="text-4xl font-bold text-gray-500">Home</h1>
            <h1 className="text-4xl font-bold text-gray-500">About</h1>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">About the Organization</h3>
            <p className="text-lg text-gray-600 leading-7">Welcome to our university management system! Our system is designed to help students and faculty manage their academic tasks more efficiently. With features such as assignment uploads, grade tracking, and student issue reporting, our system makes it easy for everyone to stay on top of their academic responsibilities.</p>
            <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mr-4">Learn More</button>
            <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-8">Get Started</button>
          </div>
          </div>
        </section>
      </SessionCheck>
      <Session></Session>

      <style jsx>{`
        button {
          transition: all 0.3s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        button:focus {
          outline: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 0 0 2px rgba(79,153,246,0.4);
        }
      `}</style>
    </>
  );
}

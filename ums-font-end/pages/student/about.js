import MyLayout from "./layout";

export default function About() {
  return (
    <>
      <MyLayout />

      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              About Us
            </h1>
            <p class="mb-4 text-gray-600 dark:text-gray-300 leading-loose">
              We are a university management system that is dedicated to making the lives of students, faculty, and staff easier. Our system provides a seamless experience for everyone, from course registration to student housing management and everything in between. We strive to make higher education more accessible and efficient for all.
            </p>
            <p class="mb-4 text-gray-600 dark:text-gray-300 leading-loose">
              Our team consists of experienced professionals who have a deep understanding of the higher education landscape. We are constantly innovating and improving our platform to meet the evolving needs of the academic community.
            </p>
            <p class="mb-4 text-gray-600 dark:text-gray-300 leading-loose">
              Thank you for choosing our university management system. We are committed to providing you with the best experience possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

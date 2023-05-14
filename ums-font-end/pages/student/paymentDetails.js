import MyLayout from "./layout";

export default function paymentDetails() {
  return (
    <>
      <MyLayout />
      <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-black">Payment Details</h1>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm font-medium text-gray-500 mb-2 text-black">Student Information:</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">Name:</p>
            <p className="text-sm text-black">John Doe</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">ID:</p>
            <p className="text-sm text-black">123456</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">Email:</p>
            <p className="text-sm text-black">johndoe@example.com</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm font-medium text-gray-500 mb-2 text-black">Payment Information:</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">Payment Date:</p>
            <p className="text-sm text-black">May 13, 2023</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">Amount:</p>
            <p className="text-sm text-black">$500.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">Payment Method:</p>
            <p className="text-sm text-black">Credit Card</p>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-black">Make a Payment</button>
      </div>
        </div>
        </section> 
    </>
  );
}

import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard/" },
  { name: "x", href: "#" },
  { name: "x", href: "#" },
  { name: "x", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    //     <div className="bg-white">
    //       <header className="absolute inset-x-0 top-0 z-50">
    //         <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    //           <div className="flex lg:flex-1">
    //             <a href="#" className="-m-1.5 p-1.5">
    //               <span className="sr-only">Your Company</span>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //                 alt=""
    //               />
    //             </a>
    //           </div>
    //           <div className="flex lg:hidden">
    //             <button
    //               type="button"
    //               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //               onClick={() => setMobileMenuOpen(true)}
    //             >
    //               <span className="sr-only">Open main menu</span>
    //               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //             </button>
    //           </div>
    //           <div className="hidden lg:flex lg:gap-x-12">
    //             {navigation.map((item) => (
    //               <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //             <a href="/admin/dashboard/addadmin" className="text-sm font-semibold leading-6 text-gray-900">
    //               Register <span aria-hidden="true">&rarr;</span>
    //             </a>
    //           </div>
    //         </nav>
    //         <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    //           <div className="fixed inset-0 z-50" />
    //           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //             <div className="flex items-center justify-between">
    //               <a href="#" className="-m-1.5 p-1.5">
    //                 <span className="sr-only">Your Company</span>
    //                 <img
    //                   className="h-8 w-auto"
    //                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //                   alt=""
    //                 />
    //               </a>
    //               <button
    //                 type="button"
    //                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //                 onClick={() => setMobileMenuOpen(false)}
    //               >
    //                 <span className="sr-only">Close menu</span>
    //                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //               </button>
    //             </div>
    //             <div className="mt-6 flow-root">
    //               <div className="-my-6 divide-y divide-gray-500/10">
    //                 <div className="space-y-2 py-6">
    //                   {navigation.map((item) => (
    //                     <a
    //                       key={item.name}
    //                       href={item.href}
    //                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   ))}
    //                 </div>
    //                 <div className="py-6">
    //                   <a
    //                     href="#"
    //                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                   >
    //                     Log in
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </Dialog.Panel>
    //         </Dialog>
    //       </header>

    //       <div className="relative isolate px-6 pt-14 lg:px-8">
    //         <div
    //           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    //           aria-hidden="true"
    //          >
    //           {/* <div
    //             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    //             style={{
    //               clipPath:
    //                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //             }}
    //           /> */}
    //         </div>
    //     </div>
    // </div>

    <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:7000/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            UMS
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/admin/dashboard/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                #
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                #
              </a>
            </li>
            <li>
              <a
                href="/admin/dashboard/addadmin"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { UserGreeting } from "./UserGreeting"; // Komponen dipindahkan ke file terpisah
import { SignInOrOutButton } from "./SignInOrOutButton"; // Komponen dipindahkan ke file terpisah
import Image from "next/image";

const Navbar = async () => {
  const session = await getServerSession(authOption);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/sign-in" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://seeklogo.com/images/C/code-org-logo-ED49F688BA-seeklogo.com.png"
            width={40}
            height={100}
            className="h-8"
            alt="flip logo"
         ></Image>
          <UserGreeting user={session?.user ? { name: session.user.name || 'Guest' } : null} />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <SignInOrOutButton user={session?.user ? session.user.name || 'Guest' : null} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


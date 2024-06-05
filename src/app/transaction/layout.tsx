"use server";

import React from "react";
import { LuSend } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import Link from "next/link";
import { getBalance, rupiah } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";

const PageTransactionlayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOption);

  const username: any = session?.user?.name;

  const [data] = await Promise.all([getBalance(username)]);
  const dataBalance = data.map((test) => {
    return test;
  });
  //console.log("check : dataBalance di handleSubmit : ", data[0].balance);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-lg"
        aria-label="Sidebar"
      >
        {session?.user?.name ? (
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className=" border p-2 mb-2 border-slate-400 rounded-md">
              <p className="text-xs text-slate-500">Balance</p>
              <p className="text-md bold">{rupiah(data[0].balance)}</p>
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/transaction/home"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#fd8165] dark:hover:bg-gray-700 group"
                >
                  <FiHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3 active:text-[#ee7459]">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction/transfer"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#fd8165] dark:hover:bg-gray-700 group"
                >
                  <LuSend className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Transfer Money
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction/topup"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#fd8165] dark:hover:bg-gray-700 group"
                >
                  <BiWallet className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Top Up Balance
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className=" border p-2 mb-2 border-slate-400 rounded-md">
              <p className="text-xs text-slate-500">
                Please{" "}
                <Link href={"/sign-in"} className=" font-semibold text-slate-800">
                  Sign-In
                </Link>
              </p>
            </div>
          </div>
        )}
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageTransactionlayout;

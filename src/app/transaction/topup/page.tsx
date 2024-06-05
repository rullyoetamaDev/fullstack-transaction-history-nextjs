"use client";

import { handleTopUp } from "@/components/Submit/SubmitTopUp";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import { BiWallet } from "react-icons/bi";


const PageTopupTransaction = () => {
  const router = useRouter()
  const initialState = {
    amount: 0,
  };

  const [values, setValues] = useState<any>(initialState);

  const handleInput = (e:any) => {
    e.preventDefault();
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: parseInt(value),
    });
  };

  const handleTransfer = (e: SyntheticEvent) => {
    e.preventDefault();
    // alert("Hallo")
    console.log("check - values : ",typeof values)
    handleTopUp(values.amount)
    router.push("/transaction/home")
    router.refresh();
  };
  return (
    <div>
      <h2 className="pb-3 font-semibold">Transaction Money</h2>
      <p className="pb-3 font-semibold">
        {values.message !== "" ? values.message : ""}
      </p>
      <div className="w-full max-w-xs">
        <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleTransfer}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              name="amount"
              onChange={handleInput}
              type="number"
              placeholder="Amount"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-[#FD6245] hover:bg-[#fd8165] dark:hover:bg-gray-700 group"
            >
              <BiWallet className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 text-white ms-3 whitespace-nowrap">
                Submit Top Up
              </span>
            </button>
          </div>
        </form>
        {/* <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p> */}
      </div>
    </div>
  );
};

export default PageTopupTransaction;

"use client";

import React, { SyntheticEvent, useState } from "react";
import { handleSubmit } from "@/components/SubmitTransfer";
import { useRouter } from "next/navigation";
import { LuSend } from "react-icons/lu";

const PageTransferTransaction = () => {
  const router = useRouter();

  const initialState = {
    username: "",
    amount: 0,
    deskripsi : "",
    message: "",
  };

  const [values, setValues] = useState(initialState);

  const handleInput = (e: any) => {
    //console.log("chek - e di PageTransferTransaction : ",e.target.id)
    e.preventDefault();
    const { name, value } = e.target;
    if (e.target.id == "amount") {
      setValues({
        ...values,
        [name]: parseInt(value),
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleTransfer = (e: SyntheticEvent) => {
    e.preventDefault();
    //alert("Hallo")
    handleSubmit(values.username, values.amount, values.deskripsi);
    

    console.log("check - handleSubmit : ",handleSubmit)
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              onChange={handleInput}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
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

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deskripsi"
              name="deskripsi"
              onChange={handleInput}
              // type="text"
              placeholder="Deskripsi"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-[#FD6245] hover:bg-[#fd8165] dark:hover:bg-gray-700 group"
            >
              <LuSend className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 text-white ms-3 whitespace-nowrap">
                Transfer Money
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

export default PageTransferTransaction;

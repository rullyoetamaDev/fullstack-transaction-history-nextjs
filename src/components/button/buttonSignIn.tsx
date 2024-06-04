"use client";
import React from "react";
import { signOut } from "next-auth/react";

const ButtonSignOut = () => {
  return (
    <button
      onClick={() => signOut({
        redirect : true,
        callbackUrl : `${window.location.origin}/sign-in`
      })}
      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
    >
      Sign Out
    </button>
  );
};

export default ButtonSignOut;

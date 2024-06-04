'use server'
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const ButtonSubmit = async () => {
    const session = await getServerSession(authOption);
  return (
    <button
      className="bg-[#fd8165] hover:bg-[#dc6d54] text-white text-xs font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
      type="submit"
      // onClick={() => signIn()}
    >
      Log In
    </button>
  );
};

export default ButtonSubmit;

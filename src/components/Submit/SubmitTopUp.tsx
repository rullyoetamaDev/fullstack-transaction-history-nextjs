"use server";

import { authOption } from "@/lib/auth";
import { db } from "@/lib/db";
import { getBalance } from "@/lib/utils";
import { getServerSession } from "next-auth";

export const handleTopUp = async (balance: number) => {
  const session = await getServerSession(authOption);
  // console.log("check : session di handleSubmit : ", session);
  // console.log("check : balance di handleSubmit : ", typeof balance);

  const username : any = session?.user?.name 
  const [data] = await Promise.all([getBalance(username)])
  const dataBalance = data.map((test) => {return test})

  const allbalance : number = data[0].balance + balance

  const response = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/topupbalance"
      : "http://localhost:3000/api/topupbalance",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: session?.user?.name,
        balance: allbalance,
      }),
    }
  )
    .then(function (a) {
      return a.json(); // call the json method on the response to get JSON
    })
    .then(function (json) {
      console.log("check : json di SubmitTopUp : ", json);
    });
};
